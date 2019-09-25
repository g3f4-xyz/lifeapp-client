import { FormControl, FormControlLabel, InputLabel, NativeSelect } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import React, { ChangeEvent, FC } from 'react';
import { TASK_STATUSES, TASK_TYPE } from '../../../constans';
import { TaskListQueryResponse, TaskTypeEnum } from '../../modules/TaskList/__generated__/TaskListQuery.graphql';
import useTaskListBarStyles from './useTaskListBarStyles';

export interface TaskListBarProps {
  settings: TaskListQueryResponse['app']['settings']['taskList'];

  onFilterByTitle(event: ChangeEvent<HTMLInputElement>): void;
  onFilterByType(event: ChangeEvent<HTMLInputElement>): void;
  onFilterByStatus(event: ChangeEvent<HTMLSelectElement>): void;
}

const TaskListBar: FC<TaskListBarProps> = props => {
  const { settings, onFilterByTitle, onFilterByType, onFilterByStatus } = props;
  const {
    filters: { title, taskType, status },
  } = settings;
  const classes = useTaskListBarStyles();

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
            <NativeSelect value={status || ''} onChange={onFilterByStatus} input={<Input id="status-filter" />}>
              <option value="" />
              {Object.keys(TASK_STATUSES).map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          {Object.keys(TASK_TYPE).map(key => (
            <FormControlLabel
              key={key}
              control={<Checkbox color="default" checked={taskType.includes(key as TaskTypeEnum)} onChange={onFilterByType} value={key} />}
              label={key}
            />
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TaskListBar;
