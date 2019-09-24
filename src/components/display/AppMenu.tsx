import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React, { MouseEvent } from 'react';

interface Props {
  options: Array<{ label: string; action: () => void; visible?: boolean }>;
}

interface State {
  anchorEl: HTMLElement | null;
}

class AppMenu extends React.Component<Props, State> {
  state = {
    anchorEl: null
  };

  render(): React.ReactNode {
    const { options } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton aria-label="More" aria-owns={anchorEl ? 'long-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
          <MoreVert />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          {options
            .filter(({ visible = true }) => visible)
            .map(({ label, action }) => (
              <MenuItem key={label} onClick={action}>
                {label}
              </MenuItem>
            ))}
        </Menu>
      </div>
    );
  }

  private handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    this.setState({ anchorEl: event.currentTarget });
  };

  private handleClose = () => {
    this.setState({ anchorEl: null });
  };
}

export default AppMenu;
