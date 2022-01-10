import React, { FC } from 'react';
import { typesTask } from '../../../helpers/types';


const TaskItem: FC<typesTask> = ({task}) => {

  return (
      <li className="task-item">
          {task}
      </li>
  );
}

export default TaskItem;