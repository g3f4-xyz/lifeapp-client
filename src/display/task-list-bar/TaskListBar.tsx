import {
  FormControl,
  FormControlLabel,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import React, { ChangeEvent, FC } from 'react';
import { TASK_STATUSES, TASK_TYPE, TaskStatusEnum, TaskTypeEnum } from '../../constans';
import { useTaskListPagination } from '../../modules/tasks/list/__generated__/useTaskListPagination.graphql';
import useTaskListBarStyles from './useTaskListBarStyles';

export interface TaskListBarProps {
  taskListSettings: useTaskListPagination['settings']['taskList'];

  onFilterByTitle(event: ChangeEvent<HTMLInputElement>): void;
  onFilterByType(event: ChangeEvent<HTMLInputElement>): void;
  onFilterByStatus(event: React.ChangeEvent<{ value: unknown }>): void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const TaskListBar: FC<TaskListBarProps> = (props) => {
  const { taskListSettings, onFilterByTitle, onFilterByType, onFilterByStatus } = props;
  const {
    filters: { title, taskType, taskStatus },
  } = taskListSettings;
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
            <InputLabel id="demo-mutiple-checkbox-label">Status</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={taskStatus}
              onChange={onFilterByStatus}
              input={<Input />}
              renderValue={(selected) => (selected as string[]).join(', ')}
              MenuProps={MenuProps}
            >
              {Object.keys(TASK_STATUSES).map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={taskStatus.indexOf(name as TaskStatusEnum) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {Object.keys(TASK_TYPE).map((key) => (
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
};

export default TaskListBar;
