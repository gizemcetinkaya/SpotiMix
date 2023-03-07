import { useEffect } from 'react';
import { fetchCategories, fetchFeaturedPlaylists, fetchNewReleases } from "../../features/musicSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import DiscoverBlock from "../DiscoverBlock/DiscoverBlock";

const Discover = () => {

    const loading = useAppSelector(state => state.music.loading);
    const newReleases = useAppSelector(state => state.music.newReleases);
    const playlists = useAppSelector(state => state.music.featuredPlaylists);
    const categories = useAppSelector(state => state.music.categories);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNewReleases());
        dispatch(fetchFeaturedPlaylists());
        dispatch(fetchCategories());
    }, []);

    return (
        <>
            {
                loading ? <div className="loading"></div> :
                    <div className="discover">
                        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
                        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
                        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
                    </div>
            }
        </>
    );
}

export default Discover;
