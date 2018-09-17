import React, { Component } from 'react';

import './Main.css';

import ButtonSmall from '../Button/Button';

class MainConatiner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      tokenType: null,
      error: null
    }

    this.authUrl = "https://accounts.spotify.com/authorize?client_id=d253ce6ec3ed4723b2d6be092f8a387e&redirect_uri=http:%2F%2Flocalhost:3000&scope=user-read-private%20user-read-email&response_type=token&state=123";

  }

  isAuth() {
    return this.state.accessToken != null;
  }

  login = () => {
    window.open(this.authUrl, "", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
  };

  render() {
    return (
      this.isAuth() ? null : (
        <div className="login">
            <ButtonSmall title="Login on Spotify" onClick={this.login}></ButtonSmall>
        </div>
      )
     );
  }

}

export default MainConatiner;
