import { createContext, ReactElement, useState } from 'react';

export type TaskType = {
	name: string;
	id: string;
};

const initState: TaskType[] = [
	{
		name: 'Do backend assessment using nodejs and express with typescript',
		id: '1',
	},
	{
		name: 'Do frontend assessment using react and typescript',
		id: '2',
	},
	{
		name: 'Test task 3',
		id: '3',
	},
];

export type UseTasksContextType = { tasks: TaskType[]; setTasks: any };

const initContextState: UseTasksContextType = { tasks: [], setTasks: () => {} };

const TasksContext = createContext<UseTasksContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
	const [tasks, setTasks] = useState<TaskType[]>(initState);

	return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>;
};

export default TasksContext;
