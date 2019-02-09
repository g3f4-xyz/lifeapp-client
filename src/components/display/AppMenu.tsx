import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React from 'react';

interface Props {
  options: any;
}

interface State {
  anchorEl: any;
}

class AppMenu extends React.Component<Props, State> {
  state = {
    anchorEl: null,
  };

  handleClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render(): React.ReactNode {
    const { options } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVert />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.filter(({ visible = true }: any) => visible).map(({ label, action, disabled }: any, key: any) => (
            <MenuItem key={key} disabled={disabled} onClick={action}>
              {label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default AppMenu;
