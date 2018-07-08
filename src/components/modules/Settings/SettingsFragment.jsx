import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = theme =>({
  addButton: {
    zIndex: 9,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 72,
    width: 72,
  },
  addButtonIcon: {
    color: '#8BC34A',
    fontSize: 72,
  },
  button: {
  },
  container: {
  },
  list: {
  },
  display1: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit,
  },
  section: {
    margin: theme.spacing.unit * 2,
  },
});

class SettingsFragment extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
  };

  state = this.props.data;

  render() {
    console.log(['SettingsFragment:render'], this.props, this.state);
    const { classes } = this.props;
    const { authentication, notifications } = this.state;
    const { provider } = authentication;
    const { daily, show, single, vibrate } = notifications;

    return (
      <div className={classes.container}>
        <IconButton
          className={classes.addButton}
          color="primary"
          onClick={() => {}}
        >
          <CheckCircleIcon className={classes.addButtonIcon} />
        </IconButton>
        <Paper className={classes.section}>
          <Typography className={classes.display1} variant="display1" gutterBottom>
            Notifications
          </Typography>
          <div className={classes.list}>
            <List subheader={<ListSubheader>General</ListSubheader>}>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Show" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => {}}
                    checked={show}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Vibrate" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => {}}
                    checked={vibrate}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Subscription" />
                <ListItemSecondaryAction>
                  <Button variant="contained" color="primary" className={classes.button}>
                    Delete subscription
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
          <div className={classes.root}>
            <List subheader={<ListSubheader>Daily</ListSubheader>}>
              <ListItem>
                <ListItemIcon>
                  <WifiIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => {}}
                    checked={daily.events}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Meetings" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => {}}
                    checked={daily.meetings}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Todos" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => {}}
                    checked={daily.todos}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Routines" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => {}}
                    checked={daily.routines}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
          <div className={classes.list}>
            <List subheader={<ListSubheader>Signle</ListSubheader>}>
              <ListItem>
                <ListItemIcon>
                  <WifiIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => {}}
                    checked={single.events}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Meetings" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => {}}
                    checked={single.meetings}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Todos" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => {}}
                    checked={single.todos}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Routines" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => {}}
                    checked={single.routines}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
        </Paper>
        <Paper className={classes.section}>
          <Typography className={classes.display1} variant="display1" gutterBottom>
            Authentication
          </Typography>
          <div className={classes.list}>
            <List subheader={<ListSubheader>General</ListSubheader>}>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Provider" />
                <ListItemText primary={provider} />
                <ListItemSecondaryAction>
                  <Button variant="contained" color="primary" className={classes.button}>
                    Delete authentication
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>

        </Paper>
      </div>
    );
  }
}

export default createFragmentContainer(
  withStyles(styles)(SettingsFragment),
  graphql`
    fragment SettingsFragment on SettingsType {
      id
      authentication {
        id
        provider
      }
      notifications {
        id
        daily {
          id
          events
          meetings
          todos
          routines
        }
        show
        single {
          id
          events
          meetings
          todos
          routines
        }
      }
    }
  `,
);

