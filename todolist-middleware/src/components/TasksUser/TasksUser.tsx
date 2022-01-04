import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { typesState } from '../../helpers/types';
import './style.css';
import TasksList from './TasksList/TasksList';


const TasksUser: FC = () => {
    let user = useSelector((state: typesState) => state.user);

  return (
      <div className="tasks-user">
          <TasksList tasks={user?.tasks}/>
      </div>
  );
}

export default TasksUser;