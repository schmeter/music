import React from 'react';
import PropTypes from 'prop-types';

import { isTouch } from '../../../../util/screen';

import configApp from '../../../../../config/app.json';

class Analyser extends React.Component {
    canvas = React.createRef();

    componentDidMount() {
        this.analyse();
    }

    componentDidUpdate() {
        this.analyse();
    }

    isAnalyserAllowed() {
        const { audio } = this.props;

        return audio && !isTouch() && configApp.useAnalyser;
    }

    analyse() {
        const { audio, isPlaying } = this.props;
        const canvas = this.canvas.current;
        const AudioContext = window.AudioContext;

        if (
            canvas
            && audio
            && AudioContext
            && !this.audioContext
            && isPlaying
        ) {
            this.audioContext = new AudioContext();
            const analyser = this.audioContext.createAnalyser();
            const source = this.audioContext.createMediaElementSource(audio);

            source.connect(analyser);
            analyser.connect(this.audioContext.destination);
            this.drawAnalyser(canvas, analyser);
        }
    }

    drawAnalyser(canvas, analyser) {
        const { mode = 'frequency' } = this.props;
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
        return !this.isAnalyserAllowed() ? null : (
            <canvas
                className="canvas"
                ref={this.canvas}
            />
        );
    }
}

Analyser.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    audio: PropTypes.object,
    mode: PropTypes.oneOf(['frequency', 'waveform'])
};

export default Analyser;
