//import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import mock from './Base.mock';

describe('<Base />', () => {
	it('should render', () => {
		const { container } = renderTheme(<Base {...mock}></Base>);
		expect(container).toMatchSnapshot();
	});
});
