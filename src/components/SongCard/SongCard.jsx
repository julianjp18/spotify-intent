
import './SongCard.css';

const SongCard = ({
    artistName,
    songImage,
    onNextAction,
    onBackAction,
    song
}) => {

    const onBackHandle = () => {
        onBackAction();
    };

    const onPauseHandle = () => {

    };

    const onNextHandle = () => {
        onNextAction();
    };

    return (
        <div className="song-card__container">
            <div className="image__container">
                <img className="song-card-image" src={songImage} alt={artistName} />
            </div>
            <div className="info__container">
                <p>{artistName}</p>
                <p>{song?.name ?? ''}</p>
            </div>
            <div className="actions__container">
                <button onClick={onBackHandle}>Atrás</button>
                <button onClick={onPauseHandle}>Pausa</button>
                <button onClick={onNextHandle}>Adelante</button>
            </div>
        </div>
    );
};

export default SongCard;