import React from 'react';
import queryString from 'query-string';
import './Player.scss';
import song from './media/lbfb-ledge.mp3';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faPause
} from '@fortawesome/free-solid-svg-icons';

class Player extends React.Component {
    constructor(props) {
        super(props);
        const params = queryString.parse(window.location.search, {
            ignoreQueryPrefix: true
        });
        this.state = {
            params: params,
            url: params.url,
            img: null,
            paused: true,
            position: 0
        };
        this.audio = new Audio(this.state.url || song);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setState({
            paused: true
        }));
        this.audio.addEventListener('timeupdate', () => {
            let current = this.audio.currentTime / this.audio.duration;
            let position = current * document.getElementById('progressBar').offsetWidth;
            this.setState({
                position: position
            });
        });
    }

    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({
            paused: true
        }));
    }

    handleClick() {
        // play/pause
        this.setState({paused: !this.state.paused}, () => {
                this.state.paused ? this.audio.pause() : this.audio.play();
            }
        );
    }

    render() {
        return (
            <div className="playerplayer">
                <div className="playOrPause" onClick={this.handleClick}>
                    <FontAwesomeIcon icon={this.state.paused ? faPlay : faPause}/>
                </div>
                <div id="progressBar" className="progress-bar">
                    <div className="inner-progress-bar" style={{width: this.state.position}}>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;
