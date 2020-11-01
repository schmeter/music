import React from 'react';
import PropTypes from 'prop-types';

import Analyser from './Analyser';

class Player extends React.Component {
    audio = React.createRef();

    componentDidMount() {
        this.loadAudio();
        document.addEventListener('keydown', this.captureKeys);
    }

    componentDidUpdate(lastProps) {
        const { activeIndex, playToggle } = this.props;

        if (lastProps.activeIndex !== activeIndex) {
            // accept values greater than -1, because -1 is initial index
            this.loadAudio(~lastProps.activeIndex);
        }
        if (lastProps.playToggle !== playToggle) {
            this.togglePlay();
        }
    }

    captureKeys = e => {
        const audio = this.audio.current;

        switch (e.keyCode) {
            case 32:
                e.preventDefault();
                // prevent double space event on focused audio element
                audio.blur();
                this.togglePlay();
                break;
            case 37:
                e.preventDefault();
                this.decreaseTimeFrame();
                break;
            case 39:
                e.preventDefault();
                this.increaseTimeFrame();
                break;
            default:
        }
    }

    loadAudio(play = false) {
        const { tracks, activeIndex, saveActiveTrack } = this.props;
        const audio = this.audio.current;
        const file = tracks[activeIndex];

        if (file) {
            saveActiveTrack(file);
            this.pause();
            audio.loop = !!file.loop;
            audio.src = file.path;
            audio.title = `${file.tag.artist} - ${file.tag.title}`;
            if (play) {
                this.play();
            } else {
                audio.load();
            }
        }
    }

    play() {
        const audio = this.audio.current;

        audio.play();
    }

    pause() {
        const audio = this.audio.current;

        audio.pause();
    }

    togglePlay() {
        const { isPlaying } = this.props;

        if (!isPlaying) {
            this.play();
        } else {
            this.pause();
        }
    }

    increaseTimeFrame() {
        const audio = this.audio.current;

        audio.currentTime += 5;
    }

    decreaseTimeFrame() {
        const audio = this.audio.current;

        audio.currentTime -= 5;
    }

    handlePlay = () => {
        const { setIsPlaying } = this.props;

        setIsPlaying(true);
    }

    handlePause = () => {
        const { setIsPlaying } = this.props;

        setIsPlaying(false);
    }

    handleError = () => {
        const { setIsPlaying } = this.props;

        setIsPlaying(false);
    }

    handleEnded = () => {
        const { nextIndex, setActiveIndex } = this.props;

        setActiveIndex(nextIndex);
    }

    render() {
        const { config, isPlaying } = this.props;
        const audio = this.audio.current;

        return (
            <div className="player">
                {!config.useAnalyser ? null : (
                    <Analyser
                        audio={audio}
                        isPlaying={isPlaying}
                    />
                )}
                <audio
                    className="audio"
                    preload="none"
                    controls
                    ref={this.audio}
                    onPlay={this.handlePlay}
                    onPause={this.handlePause}
                    onEnded={this.handleEnded}
                    onError={this.handleError}
                    tabIndex="-1"
                />
            </div>
        );
    }
}

Player.propTypes = {
    config: PropTypes.shape({
        useAnalyser: PropTypes.bool.isRequired,
    }).isRequired,
    setActiveIndex: PropTypes.func.isRequired,
    setIsPlaying: PropTypes.func.isRequired,
    saveActiveTrack: PropTypes.func.isRequired,
    tracks: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
    nextIndex: PropTypes.number.isRequired,
    playToggle: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
};

export default Player;
