import React from 'react';
import MainRoutes from './router/MainRoutes';
import Navbar from './components/Navbar/Navbar';

export default function App() {
	return (
		<>
			<Navbar />
			<MainRoutes />
		</>
	);
}
