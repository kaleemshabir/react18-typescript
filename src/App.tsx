import { useState } from 'react';
import { Route, Routes, useLocation, Navigate, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import DeleteTask from './components/DeleteTask';

function App() {
	const { pathname } = useLocation();
	const content = (
		<>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Link style={{ padding: '10px' }} to='/create-task'>
					Create Task
				</Link>
				<Link style={{ padding: '10px' }} to='/list-tasks'>
					List Tasks
				</Link>
				<Link style={{ padding: '10px' }} to='/bulk-delete'>
					Delete Task
				</Link>
			</div>
			<Routes>
				<Route path='/' element={<div>{pathname && <Navigate to='/list-tasks' replace={true} />}</div>} />
				<Route path='list-tasks' element={<TaskList />} />
				<Route path='create-task' element={<CreateTask />} />

				<Route path='bulk-delete' element={<DeleteTask />} />
				<Route path='*' element={<Navigate to='/list-tasks' replace />} />
			</Routes>
		</>
	);

	return content;
}

export default App;
