import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
	it('should render a text', () => {
		renderTheme(<TextComponent>Children</TextComponent>);
		expect(screen.getByText('Children')).toBeInTheDocument();
	});
	it('should render a dark color', () => {
		renderTheme(<TextComponent>Children</TextComponent>);
		const textComponent = screen.getByText('Children');
		expect(textComponent).toHaveStyle({
			color: theme.colors.primaryColor,
			'font-size': theme.font.sizes.medium,
		});
	});
	it('should render with whote color', () => {
		renderTheme(<TextComponent colorDark={false}>Children</TextComponent>);
		const textComponent = screen.getByText('Children');
		expect(textComponent).toHaveStyle({ color: theme.colors.white });
	});
	it('should render with whote color', () => {
		const { container } = renderTheme(<TextComponent>Children</TextComponent>);
		expect(container.firstChild).toMatchSnapshot();
	});
});
