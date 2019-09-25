import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useQuery } from 'relay-hooks';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import { TaskTypeListQuery } from './__generated__/TaskTypeListQuery.graphql';
import { TaskTypeEnum } from './__generated__/useTaskTypeFragment.graphql';
import TaskTypeListPagination from './TaskTypeListPagination';

export interface TaskTypeListProps {
  onSelect(taskType: TaskTypeEnum): void;
}

const query = graphql`
  query TaskTypeListQuery($count: Int!, $after: String) {
    app {
      taskTypeList {
        ...useTaskTypePagination
      }
    }
  }
`;

const TaskTypeList: React.FC<TaskTypeListProps> = appProps => {
  const { props, error } = useQuery<TaskTypeListQuery>({
    query,
    variables: {
      count: ITEMS_PER_PAGE,
    },
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props) {
    return <TaskTypeListPagination data={props.app.taskTypeList} {...appProps} />;
  }

  return <Loader />;
};

export default TaskTypeList;
