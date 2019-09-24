import { FormControl, FormControlLabel, InputLabel, NativeSelect } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import React, { ChangeEvent } from 'react';
import { TASK_STATUSES, TASK_TYPE } from '../../constans';
import { TaskListQueryResponse, TaskTypeEnum } from '../modules/TaskList/__generated__/TaskListQuery.graphql';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginRight: theme.spacing.unit * 2,
    },
    grow: {
      flexGrow: 1,
    },
    statusFilter: {
      marginBottom: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 2,
      minWidth: theme.spacing.unit * 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    search: {
      'position': 'relative',
      'borderRadius': theme.shape.borderRadius,
      'backgroundColor': fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      'marginLeft': 0,
      'width': '100%',
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
        'width': 120,
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
    toolbar: {
      overflow: 'scroll',
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
  });

export interface Props extends WithStyles<typeof styles> {
  settings: TaskListQueryResponse['app']['settings']['taskList'];

  onFilterByTitle(event: ChangeEvent<HTMLInputElement>): void;
  onFilterByType(event: ChangeEvent<HTMLInputElement>): void;
  onFilterByStatus(event: ChangeEvent<HTMLSelectElement>): void;
}

function TaskListBar(props: Props) {
  const { classes, settings, onFilterByTitle, onFilterByType, onFilterByStatus } = props;
  const { filters: { title, taskType, status } } = settings;

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
        <Toolbar className={classes.toolbar}>
          <FormControl className={classes.statusFilter}>
            <InputLabel htmlFor="status-filter">Status</InputLabel>
            <NativeSelect
              value={status || ''}
              onChange={onFilterByStatus}
              input={<Input id="status-filter" />}
            >
              <option value="" />
              {Object.keys(TASK_STATUSES).map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </NativeSelect>
          </FormControl>
          {Object.keys(TASK_TYPE).map(key => (
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  color="default"
                  checked={taskType.includes(key as TaskTypeEnum)}
                  onChange={onFilterByType}
                  value={key}
                />
              }
              label={key}
            />
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(TaskListBar);
