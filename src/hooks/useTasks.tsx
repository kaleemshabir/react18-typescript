import { useContext } from 'react';
import TasksContext from '../context/taskProvider';
import { UseTasksContextType } from '../context/taskProvider';

const useTasks = (): UseTasksContextType => {
	return useContext(TasksContext);
};

export default useTasks;
