import { ReactElement, useState } from 'react';
import Task from './Task';
import { CardButton } from './Card';
import useTasks from '../hooks/useTasks';

const TaskList = () => {
	let { tasks, setTasks } = useTasks();
	const [deleteTasks, setDeleteTasks] = useState<string[]>([]);

	const deleteTask = (taskId: string) => {
		setDeleteTasks((prev) => [...prev, taskId]);
	};

	let pageContent: ReactElement | ReactElement[] = (
		<div>
			<p>No card found</p>
		</div>
	);

	if (tasks?.length) {
		pageContent = tasks.map((task) => {
			return (
				<Task key={task.id} name={task.name}>
					<input
						type='checkbox'
						onChange={(e) => {
							console.log(e.target.checked);
							let checked = e.target.checked;
							if (checked) {
								deleteTask(task.id);
							}
						}}
					/>
				</Task>
			);
		});
	}
	const onDelete = () => {
		console.log("hit+++");
		let items = tasks.filter((t) => !deleteTasks.includes(t.id));
		setTasks(items);
	};
	const content = (
		<main>
			{pageContent}
			{tasks.length > 0 && <CardButton disabled={deleteTasks.length===0} onClick={() => onDelete()}>Delete Tasks</CardButton>}
		</main>
	);

	return content;
};
export default TaskList;
