import { ReactElement, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWrapper } from './Card';
import useTasks from '../hooks/useTasks';

const CreateTask = (): ReactElement => {
	const { setTasks, tasks } = useTasks();
	const [taskDescription, setTaskDescription] = useState<string>('');

	let navigate = useNavigate();
	const onSubmit = () => {
		setTasks((prev: []) => [...prev, { name: taskDescription, id: tasks.length + 1 }]);
		navigate('/list-tasks');
	};
	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTaskDescription(e.target.value);
	};
	const content = (
		<CardWrapper>
			<div>
				<label>Task Description:</label>
			</div>
			<div>
				{' '}
				<textarea style={{ height: '100px', width: '300px' }} onChange={(e) => onChange(e)} />
			</div>
			<div>
				<button disabled={!taskDescription} onClick={() => onSubmit()}>
					Submit
				</button>
			</div>
		</CardWrapper>
	);

	return content;
};

export default CreateTask;
