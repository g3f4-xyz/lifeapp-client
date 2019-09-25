import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React, { FC, MouseEvent, useState } from 'react';

interface AppMenuProps {
  options: Array<{ label: string; action: () => void; visible?: boolean }>;
}

const AppMenu: FC<AppMenuProps> = props => {
  const { options } = props;
  const [anchorEl, setAnchorEl] = useState<MouseEvent<HTMLButtonElement>['currentTarget'] | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-label="More" aria-owns={anchorEl ? 'long-menu' : undefined} aria-haspopup="true"
                  onClick={handleClick}>
        <MoreVert/>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
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
};

export default AppMenu;
