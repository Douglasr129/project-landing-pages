import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './GridContent.styles';

export const GridContent = ({ title, html, background = false }) => {
	return (
		<SectionBackground background={background}>
			<Styled.Container>
				<Heading uppercase colorDark={!background} as="h2">
					{title}
				</Heading>
				<Styled.Html>
					<TextComponent colorDark={!background}>{html}</TextComponent>
				</Styled.Html>
			</Styled.Container>
		</SectionBackground>
	);
};

GridContent.propTypes = {
	title: P.string.isRequired,
	html: P.string.isRequired,
	background: P.bool,
};
