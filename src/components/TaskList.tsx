import { ReactElement } from 'react';
import Task from './Task';
import useTasks from '../hooks/useTasks';

const TaskList = () => {
	const { tasks } = useTasks();

	let pageContent: ReactElement | ReactElement[] = <p>No Card Found...</p>;

	if (tasks?.length) {
		pageContent = tasks.map((task) => {
			return <Task key={task.id} name={task.name} />;
		});
	}
	const content = <main>{pageContent}</main>;

	return content;
};
export default TaskList;
