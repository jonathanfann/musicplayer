import React from 'react';
import queryString from 'query-string';
import './Player.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

class Player extends React.Component {
    constructor(props) {
        super(props);
        const params = queryString.parse(window.location.search, { ignoreQueryPrefix: true });
        this.state = {
            params: params,
            url: null,
            img: null,
            paused: true
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // play/pause
        this.setState({
            paused: !this.state.paused
        });
    }
    render() {
        if (this.state.params.length) {
            // if don't exist will be null, which is fine
            this.setState({
                url: this.state.params.url,
                img: this.state.params.img
            });
        }
        return (
          <div className="playerplayer">
            <div className="playOrPause" onClick={this.handleClick}>
                <FontAwesomeIcon icon={this.state.paused ? faPlay : faPause} />
            </div>
          </div>
        );
    }
}

export default Player;
