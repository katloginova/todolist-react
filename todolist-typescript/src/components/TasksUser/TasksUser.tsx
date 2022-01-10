import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { typesState, typesTask } from '../../helpers/types';
import TasksList from './TasksList/TasksList';
import TasksUserTitle from './TasksUserTitle';
import { saveToStorage } from '../../helpers/localStorage';

import './style.css';
import { Input } from 'antd';
import DefaultButton from '../DefaultButton/DefaultButton';



const TasksUser: FC = () => {
    let user = useSelector((state: typesState) => state.user);
    let [newTask, setNewTask] = useState();
    saveToStorage(user?.name, user?.tasks);

    function changeInput(e: any) {
        newTask = e.target.value;
    }

    function addTask() {
        const taskItem = {
            task: newTask,
            isDone: false,
        }
        user?.tasks?.push(taskItem);
    }
    

  return (
      <div className="tasks-user">
          <TasksUserTitle/>
          <TasksList tasks={user?.tasks} />
          <Input
              className='task-input'
              value={newTask}
              onChange={changeInput}
          />
          <DefaultButton
              classBtn='autorization-btn'
              title='добавить'
              click={addTask} />
      </div>
  );
}

export default TasksUser;