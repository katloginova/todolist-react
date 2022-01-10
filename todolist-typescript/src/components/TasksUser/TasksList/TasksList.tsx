import React, { FC } from 'react';
import { typesTask, typesUser } from '../../../helpers/types';
import TaskItem from './TaskItem';


const TasksList: FC<typesUser> = ({tasks}) => {

  return (
      <ul className="tasks-list">
          {tasks?.map((task: typesTask) => <TaskItem task={task.task}/>)}
      </ul>
  );
}

export default TasksList;