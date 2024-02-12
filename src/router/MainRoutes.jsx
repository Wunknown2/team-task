import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

export default function MainRoutes() {
	const ALL_ROUTES = [
		{
			link: '/',
			element: <HomePage />,
			id: 1,
		},
	];
	return (
		<Routes>
			{ALL_ROUTES.map((route) => (
				<Route key={route.id} path={route.link} element={route.element} />
			))}
		</Routes>
	);
}
