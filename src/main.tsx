import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsProvider } from './context/taskProvider';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ProductsProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ProductsProvider>
	</React.StrictMode>
);
