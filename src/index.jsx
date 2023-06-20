import React from 'react';
import { GlobalStyles } from './styles/global-styles';
import { createRoot } from 'react-dom/client';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './templates/Home';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<Home />} />
				</Routes>
			</BrowserRouter>
			<GlobalStyles />
		</ThemeProvider>
	</React.StrictMode>,
);
