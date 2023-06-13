import P from 'prop-types';
import * as Styled from './Footer.styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ html }) => {
	return (
		<Styled.Container>
			<SectionContainer>
				<TextComponent>{html}</TextComponent>
			</SectionContainer>
		</Styled.Container>
	);
};

Footer.propTypes = {
	html: P.string.isRequired,
};
