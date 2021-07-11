import React from "react";
import { ITEMS_PER_PAGE } from "../../../constans";
import TaskListPagination from "./pagination/TaskListPagination";
import useTaskListQuery from "./useTaskListQuery";

export default function TaskList() {
  const data = useTaskListQuery({
    count: ITEMS_PER_PAGE,
  });

  return (
    <TaskListPagination
      data={data}
      settings={data.settings.taskList}
      settingsId={data.settings.id}
    />
  );
}
