import React from 'react';
import PropTypes from 'prop-types';


class Analyser extends React.Component {
    canvas = React.createRef();

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
        const canvas = this.canvas.current;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        canvas.width = bufferLength;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const barWidth = 1;
        const barDistance = 1.375;
        const paintCanvas = () => {
            if (mode === 'waveform') {
                analyser.getByteTimeDomainData(dataArray);
            } else {
                analyser.getByteFrequencyData(dataArray);
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dataArray.forEach((item, index) => {
                const barHeight = item * 3 / 4;
                if (mode === 'waveform') {
                    ctx.fillStyle = `rgba(255, 170, 0, 1)`;
                    ctx.fillRect(index, canvas.height - barHeight, barWidth, 1);
                } else {
                    ctx.fillStyle = `rgba(255, ${255 - item}, 0, ${1 - (item / canvas.height)})`;
                    ctx.fillRect(index * barDistance, canvas.height, barWidth, 0 - barHeight);
                }
            });
            window.requestAnimationFrame(paintCanvas);
        };
        paintCanvas();
    }

    render() {
        return (
            <canvas
                className="canvas"
                ref={this.canvas}
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
