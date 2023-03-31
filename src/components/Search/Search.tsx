import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAlbumsByName } from '../../api/search';
import { setCurrentSong, setSongs } from '../../features/musicSlice';
import { useAppDispatch } from '../../store';
import { Item } from '../../types/search';
import './search.scss';

const Search = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const searchText = searchParams.get("q");

    const [searchValue, setSearchValue] = useState(searchText || "");
    const [searchData, setSearchData] = useState<Item[]>([]);

    const fetchSearchResults = async () => {
        const searchKey = searchValue.trim();
        const response = await getAlbumsByName(searchKey);
        setSearchData(response);
        const data = response.map(r => {
            return {
                id: r.id,
                name: r.name,
                image: r.album.images[0].url,
                artist: r.artists[0].name,
                link: r.preview_url
            }
        });
        dispatch(setSongs(data));
    }

    useEffect(() => {
        if (searchValue) {
            fetchSearchResults();
        }
    }, []);

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (searchValue) {
                navigate(`?q=${searchValue}`);
                fetchSearchResults();
            }
        }
    }

    return (
        <>
            <div className='search-block'>
                <input type="text"
                    name="search"
                    className="search"
                    id="search"
                    required
                    autoComplete="off"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyDown} />
                <label htmlFor="search"><span>What's your search?</span></label>
            </div>
            {
                searchData.map(item => (
                    <div className="search-item animate__animated animate__fadeIn" key={item.id} onClick={() => dispatch(setCurrentSong({
                        id: item.id,
                        name: item.name,
                        image: item.album.images[0].url,
                        artist: item.artists[0].name,
                        link: item.preview_url
                    }))}>
                        <img
                            src={item.album.images[0].url}
                            className="search-item__art"
                        />
                        <p className="search-item__title">{item.name}</p>
                    </div>

                ))
            }
        </>
    );
}

export default Search;