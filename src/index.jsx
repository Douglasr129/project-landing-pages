import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Home />
			<GlobalStyles />
		</ThemeProvider>
	</React.StrictMode>,
);
