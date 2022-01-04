import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { typesState } from '../../helpers/types';


const TasksUserTitle: FC = () => {
    let user = useSelector((state: typesState) => state.user);

  return (
      <div className="tasks-user__title">
          {user?.name}
      </div>
  );
}

export default TasksUserTitle;