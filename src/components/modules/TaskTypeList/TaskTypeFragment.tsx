import { IconButton, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { AddCircle, InfoOutlined } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import TaskTypeIcon from '../../display/TaskTypeIcon';
import { TaskTypeFragment } from './__generated__/TaskTypeFragment.graphql';
import { TaskTypeEnum } from '../TaskList/__generated__/TaskListFragment.graphql';

const styles = (theme: Theme) => ({
  actionsContainer: {
    height: '25%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  container: {
    width: 150,
    height: 150,
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.up('sm')]: {
      width: 200,
      height: 200,
      margin: theme.spacing.unit * 2,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
      height: 250,
      margin: theme.spacing.unit * 3,
    },
  },
  nameContainer: {
    fontSize: 16,
    height: '15%',
    width: '100%',
    textAlign: 'center',
    marginBottom: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 28,
    },
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
    height: 64,
    width: 64,
    [theme.breakpoints.up('sm')]: {
      height: 72,
      width: 72,
    },
    [theme.breakpoints.up('md')]: {
      height: 96,
      width: 96,
    },
  },
  addButton: {
    color: '#8BC34A',
    height: 64,
    width: 64,
    [theme.breakpoints.up('sm')]: {
      height: 72,
      width: 72,
    },
    [theme.breakpoints.up('md')]: {
      height: 96,
      width: 96,
    },
  },
  fontSize72: {
    fontSize: 40,
    [theme.breakpoints.up('sm')]: {
      fontSize: 54,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 72,
    },
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
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
      <Grid className={classes.container} item>
        <h1 className={classes.nameContainer}>{label}</h1>
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
      </Grid>
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
