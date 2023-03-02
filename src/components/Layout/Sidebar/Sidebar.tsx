import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faHeadphonesAlt,
    faHeart,
    faPlayCircle,
    faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import { Link, useLocation } from "react-router-dom";
import './sidebar.scss';

const Sidebar = () => {
    
    let location = useLocation();

    const renderSideBarOption = (link: string, icon: IconProp, text: string, path?: string, { selected }: { selected?: boolean } = {}) => {
        let isActive = location.pathname === link;
        return (
            <Link to={link}
                className={cx('sidebar__option', { 'sidebar__option--selected': isActive })}>
                <FontAwesomeIcon icon={icon} />
                <p>{text}</p>
            </Link>
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebar__profile">
                <Avatar />
                <p>Bob Smith</p>
            </div>
            <div className="sidebar__options">
                {renderSideBarOption('/home', faHeadphonesAlt, 'Discover')}
                {renderSideBarOption('/search', faSearch, 'Search')}
                {renderSideBarOption('/favourites', faHeart, 'Favourites')}
                {renderSideBarOption('/playlists', faPlayCircle, 'Playlists')}
                {renderSideBarOption('/charts', faStream, 'Charts')}
            </div>
        </div>
    );
}

export default Sidebar;
