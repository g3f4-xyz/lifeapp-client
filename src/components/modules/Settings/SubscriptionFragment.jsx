import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { createFragmentContainer, graphql } from 'react-relay';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

import { STATUSES_MAP } from '../../../constans';

const styles = {
  green: {
    color: green['500'],
  },
  red: {
    color: red['500'],
  },
};

class SubscriptionFragment extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
    onDelete: PropTypes.func,
    onTest: PropTypes.func,
  };

  state = {
    statusCode: '',
  };

  handleDelete = () => {
    this.props.onDelete(this.props.data.id);
  };

  handleTest = async () => {
    const statusCode = await this.props.onTest(this.props.data.id);

    this.setState({ statusCode });
  };

  render() {
    console.log(['SubscriptionFragment:render'], this.props, this.state);
    const { classes, data: { id, userDeviceType, userAgent } } = this.props;
    const { statusCode } = this.state;

    return (
      <ListItem key={id}>
        <ListItemText primary={`device: ${userDeviceType}`} />
        <ListItemText primary={`browser: ${userAgent}`} />
        <ListItemSecondaryAction>
          <Button onClick={this.handleDelete}>Delete</Button>
          <Button onClick={this.handleTest}>
            Test
          {!statusCode && (
            <HelpOutlineIcon />
          )}
          {statusCode === STATUSES_MAP.OK && (
            <CheckCircleIcon className={classes.green} />
          )}
          {statusCode === STATUSES_MAP.NOT_REGISTERED && (
            <HighlightOffIcon className={classes.red} />
          )}
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default createFragmentContainer(
  withStyles(styles)(SubscriptionFragment),
  graphql`
    fragment SubscriptionFragment on SubscriptionType {
      id
      userAgent
      userDeviceType
    }
  `,
);

