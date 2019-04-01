import React from 'react';
import PropTypes from 'prop-types';


class Analyser extends React.Component {
    componentDidMount() {
        this.analyse();
    }

    componentDidUpdate() {
        this.analyse();
    }

    analyse() {
        const { audio, isPlaying, mode } = this.props;
        const AudioContext = window.AudioContext;
        if (
            AudioContext
            && !this.audioContext
            && isPlaying
        ) {
            this.audioContext = new AudioContext();
            const analyser = this.audioContext.createAnalyser();
            const source = this.audioContext.createMediaElementSource(audio);
            source.connect(analyser);
            analyser.connect(this.audioContext.destination);
            this.drawAnalyser(analyser, mode);
        }
    }

    drawAnalyser(analyser, mode = 'frequency') {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        this.canvas.width = bufferLength;
        this.canvas.height = 256;
        const ctx = this.canvas.getContext('2d');
        const barWidth = 1;
        const barDistance = 1.375;
        const paintCanvas = () => {
            if (mode === 'waveform') {
                analyser.getByteTimeDomainData(dataArray);
            } else {
                analyser.getByteFrequencyData(dataArray);
            }
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            dataArray.forEach((item, index) => {
                const barHeight = item * 3 / 4;
                if (mode === 'waveform') {
                    ctx.fillStyle = `rgba(255, 170, 0, 1)`;
                    ctx.fillRect(index, this.canvas.height - barHeight, barWidth, 1);
                } else {
                    ctx.fillStyle = `rgba(255, ${255 - item}, 0, ${1 - (item / this.canvas.height)})`;
                    ctx.fillRect(index * barDistance, this.canvas.height, barWidth, 0 - barHeight);
                }
            });
            window.requestAnimationFrame(paintCanvas);
        };
        paintCanvas();
    }

    render() {
        return (
            <canvas
                ref={(ref) => {
                    this.canvas = ref;
                }}
            />
        );
    }
}

Analyser.propTypes = {
    audio: PropTypes.object.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    mode: PropTypes.string
};

export default Analyser;
