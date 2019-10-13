import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React, { FC, MouseEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MODULES_IDS } from '../../../constans';

const AppMenu: FC = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<MouseEvent<HTMLButtonElement>['currentTarget'] | null>(
    null,
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const actions = [
    {
      label: 'Log out',
      action: () => {
        history.push('/logout');
      },
    },
    {
      label: 'Show grid',
      action: () => {
        history.push('/dashboard');
      },
    },
    {
      label: 'Hide grid',
      action: () => {
        history.push(`/${MODULES_IDS.TASK_LIST}`);
      },
    },
    {
      label: 'Show settings',
      action: () => {
        history.push(`/${MODULES_IDS.SETTINGS}`);
      },
    },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        right: 10,
        zIndex: 9,
      }}
    >
      <IconButton
        aria-label="More"
        aria-haspopup="true"
        aria-owns={anchorEl ? 'long-menu' : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {actions.map(({ label, action }) => (
          <MenuItem key={label} onClick={action}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default AppMenu;
