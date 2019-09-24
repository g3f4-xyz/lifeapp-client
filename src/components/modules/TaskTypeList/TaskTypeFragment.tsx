import { IconButton, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { AddCircle, InfoOutlined } from '@material-ui/icons';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import TaskTypeIcon from '../../display/TaskTypeIcon';
// eslint-disable-next-line @typescript-eslint/camelcase
import { TaskTypeEnum, TaskTypeFragment_data } from './__generated__/TaskTypeFragment_data.graphql';

const styles = (theme: Theme) => ({
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: theme.spacing(1) * 2 * 8,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(1) * 2 * 12
    },
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(1) * 2 * 16
    }
  },
  nameContainer: {
    fontSize: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.spacing(4)
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(5)
    }
  },
  descContainer: {
    flexGrow: 1,
    fontSize: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.spacing(4)
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(5)
    }
  },
  descText: {
    padding: 0,
    margin: 0,
    fontSize: theme.spacing(1) * 1.5,
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(3)
    }
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  infoButton: {
    color: '#505ae8',
    height: 64,
    width: 64,
    [theme.breakpoints.up('sm')]: {
      height: 80,
      width: 80
    },
    [theme.breakpoints.up('md')]: {
      height: 96,
      width: 96
    }
  },
  addButton: {
    color: '#8BC34A',
    height: 64,
    width: 64,
    [theme.breakpoints.up('sm')]: {
      height: 80,
      width: 80
    },
    [theme.breakpoints.up('md')]: {
      height: 96,
      width: 96
    }
  },
  fontSize72: {
    fontSize: 40,
    [theme.breakpoints.up('sm')]: {
      fontSize: 54
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 72
    }
  }
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: TaskTypeFragment_data;

  onSelect(taskType: TaskTypeEnum): void;
}

interface State {
  info: boolean;
}

class TaskType extends React.Component<Props, State> {
  state = {
    info: false
  };

  onInfo = () => {
    this.setState({
      info: !this.state.info
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
          {this.state.info ? <h3 className={classes.descText}>{description}</h3> : <TaskTypeIcon type={typeId} className={classes.icon} />}
        </div>
        <div className={classes.actionsContainer}>
          <IconButton className={classes.infoButton} onClick={this.onInfo}>
            <InfoOutlined className={classes.fontSize72} />
          </IconButton>
          <IconButton className={classes.addButton} onClick={() => onSelect(typeId)}>
            <AddCircle className={classes.fontSize72} />
          </IconButton>
        </div>
      </Grid>
    );
  }
}

export default createFragmentContainer<Props>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  withStyles(styles)(TaskType),
  {
    data: graphql`
      fragment TaskTypeFragment_data on TaskTypeType {
        id
        typeId
        label
        description
      }
    `
  }
);
