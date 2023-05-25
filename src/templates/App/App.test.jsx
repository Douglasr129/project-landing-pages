import { renderTheme } from '../../styles/render-theme';
import React from 'react';
import Home from '.';

describe('<Home />', () => {
	it('should render home', () => {
		renderTheme(<Home />);
	});
});
