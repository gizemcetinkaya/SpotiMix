import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEllipsisH, 
    faHeart, 
    faPlayCircle, 
    faRandom, 
    faRetweet, 
    faStepBackward, 
    faStepForward, 
    faVolumeDown 
} from "@fortawesome/free-solid-svg-icons";
import './player.scss';

const Player = () => {

    return (
        <div className="player">
            <div className="player__album">
                <span />
                <p>Nothing's playing</p>
            </div>
            <div className="player__controls">
                <FontAwesomeIcon icon={faStepBackward} />
                <FontAwesomeIcon icon={faPlayCircle} />
                <FontAwesomeIcon icon={faStepForward} />
            </div>
            <div className="player__seekbar" />
            <div className="player__actions">
                <FontAwesomeIcon icon={faEllipsisH} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faRandom} />
                <FontAwesomeIcon icon={faRetweet} />
                <FontAwesomeIcon icon={faVolumeDown} />
            </div>
        </div>
    );
}

export default Player;
