import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DiscoverItem from './DiscoverItem/DiscoverItem';
import '../DiscoverBlock/discover-block.scss';

const scrollContainer = (id: string, { isNegative }: { isNegative?: boolean } = {}) => {
    return () => {
        const scrollableContainer = document.getElementById(id) as HTMLElement;
        const amount = isNegative ? -scrollableContainer.offsetWidth : scrollableContainer.offsetWidth;

        scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
    };
}

interface DiscoverBlockProps<T> {
    text: string;
    id: string;
    data: T[];
    imagesKey?: string;
}

const DiscoverBlock = <T,>({ text, id, data, imagesKey = 'images' }: DiscoverBlockProps<T>) => {
    return (
        <div className="discover-block">
            <div className="discover-block__header">
                <h2>{text}</h2>
                <span />
                {
                    data.length ? (
                        <div className="animate__animated animate__fadeIn">
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                onClick={scrollContainer(id, { isNegative: true })}
                            />
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                onClick={scrollContainer(id)}
                            />
                        </div>
                    ) : null
                }
            </div>
            <div className="discover-block__row" id={id}>
                {data.map(({ [imagesKey]: images, name }: any) => (
                    <DiscoverItem key={`${name}`} images={images} name={name} />
                ))}
            </div>
        </div>
    );
}

export default DiscoverBlock;
