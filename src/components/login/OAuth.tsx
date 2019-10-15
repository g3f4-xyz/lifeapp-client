import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import io from 'socket.io-client';
import { UserInfo } from './useAuth';

// eslint-disable-next-line no-undef
const API_HOST = process.env.REACT_APP_API_HOST || '';

const openWindow = (provider: string, socketId: string) => {
  const url = `${API_HOST}/auth/${provider}?socketId=${socketId}`;

  return window.open(url);
};

export interface OAuthProps {
  provider: string;
  userInfo: UserInfo | null;

  onUserInfo(userInfo: UserInfo): void;
}

interface State {
  disabled: boolean;
}

export default class OAuth extends Component<OAuthProps, State> {
  state = {
    disabled: false,
  };

  private authWindow: Window | null = null;

  checkWindow() {
    const check = setInterval(() => {
      const { authWindow } = this;

      if (!authWindow || authWindow.closed || authWindow.closed === undefined) {
        clearInterval(check);
        this.setState({ disabled: false });
      }
    }, 1000);
  }

  startAuth = () => {
    if (!this.state.disabled) {
      const { provider } = this.props;
      const socket = io(API_HOST);

      socket.on('connect', () => {
        this.authWindow = openWindow(provider, socket.id);

        this.checkWindow();
        this.setState({
          disabled: true,
        });

        socket.on(provider, (user: UserInfo) => {
          this.authWindow && this.authWindow.close();
          this.props.onUserInfo(user);
        });
      });
    }
  };

  render() {
    const { provider, userInfo } = this.props;
    const { disabled } = this.state;

    return (
      <div>
        {userInfo && userInfo.name ? (
          <Grid container justify="center" alignItems="center">
            <Avatar alt={userInfo.name} src={userInfo.photo} />
          </Grid>
        ) : (
          <Button onClick={this.startAuth} disabled={disabled}>
            {`LOGIN WITH ${provider.toUpperCase()}`}
          </Button>
        )}
      </div>
    );
  }
}
