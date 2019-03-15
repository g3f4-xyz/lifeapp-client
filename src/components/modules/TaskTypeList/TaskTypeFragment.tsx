import { IconButton, StyledComponentProps, withStyles } from '@material-ui/core';
import { AddCircle, InfoOutlined } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import TaskTypeIcon from '../../display/TaskTypeIcon';
import { TaskTypeFragment } from './__generated__/TaskTypeFragment.graphql';
import { TaskTypeEnum } from '../TaskList/__generated__/TaskListFragment.graphql';

const styles = {
  actionsContainer: {
    height: '25%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  container: {
    width: 250,
    height: 250,
    margin: 20,
  },
  nameContainer: {
    height: '15%',
    width: '100%',
    textAlign: 'center',
  },
  descContainer: {
    height: '65%',
    width: '100%',
  },
  descText: {
    padding: 0,
    margin: 0,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  infoButton: {
    color: '#505ae8',
    height: 96,
    width: 96,
  },
  addButton: {
    color: '#8BC34A',
    height: 96,
    width: 96,
  },
  fontSize72: {
    fontSize: 72,
  },
};

interface Props extends StyledComponentProps<keyof typeof styles> {
  data: TaskTypeFragment;
  onSelect(taskType: TaskTypeEnum): void;
}

interface State {
  info: boolean;
}

class TaskType extends React.Component<Props, State> {
  state = {
    info: false,
  };

  onInfo = () => {
    this.setState({
      info: !this.state.info,
    });
  };

  render(): React.ReactNode {
    const { classes, data, onSelect } = this.props;
    const { label, description, typeId } = data;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    return (
      <div className={classes.container}>
        <div className={classes.nameContainer}>
          <h1>{label}</h1>
        </div>
        <div className={classes.descContainer}>
          {this.state.info ? (
            <h3 className={classes.descText}>{description}</h3>
          ) : (
            <TaskTypeIcon type={typeId} className={classes.icon} />
          )}
        </div>
        <div className={classes.actionsContainer}>
          <IconButton
            className={classes.infoButton}
            onClick={this.onInfo}
          >
            <InfoOutlined className={classes.fontSize72} />
          </IconButton>
          <IconButton
            className={classes.addButton}
            onClick={() => onSelect(typeId)}
          >
            <AddCircle className={classes.fontSize72} />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(TaskType),
  graphql`
    fragment TaskTypeFragment on TaskTypeType {
      id
      typeId
      label
      description
    }
  `,
);
