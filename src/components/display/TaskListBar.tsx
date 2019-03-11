import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React, { ChangeEvent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import { TASK_TYPES } from '../../constans';
import { TaskListQueryResponse } from '../modules/TaskList/__generated__/TaskListQuery.graphql';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    wrapper: {
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row-reverse',
      },
    },
  });

export interface Props extends WithStyles<typeof styles> {
  settings: TaskListQueryResponse['app']['settings']['taskList'];

  onFilterByTitle(event: ChangeEvent): void;
  onFilterByType(val: any): void;
}

function TaskListBar(props: Props) {
  const { classes, settings, onFilterByTitle, onFilterByType } = props;
  const { filters: { title, taskType } } = settings;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.wrapper}>
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={title}
              onChange={onFilterByTitle}
              placeholder="Filter by title..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
        <div className={classes.grow} />
        <Toolbar>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  color="default"
                  checked={taskType.includes(TASK_TYPES.TODO)}
                  onChange={onFilterByType}
                  value={TASK_TYPES.TODO}
                />
              }
              label="Todos"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="default"
                  checked={taskType.includes(TASK_TYPES.ROUTINE)}
                  onChange={onFilterByType}
                  value={TASK_TYPES.ROUTINE}
                />
              }
              label="Routines"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="default"
                  checked={taskType.includes(TASK_TYPES.EVENT)}
                  onChange={onFilterByType}
                  value={TASK_TYPES.EVENT}
                />
              }
              label="Events"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="default"
                  checked={taskType.includes(TASK_TYPES.MEETING)}
                  onChange={onFilterByType}
                  value={TASK_TYPES.MEETING}
                />
              }
              label="Meetings"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(TaskListBar);
