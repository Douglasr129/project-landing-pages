import P from 'prop-types';
import * as Styled from './Footer.styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ footerHtml }) => {
	return (
		<Styled.Container>
			<SectionContainer>
				<TextComponent>{footerHtml}</TextComponent>
			</SectionContainer>
		</Styled.Container>
	);
};

Footer.propTypes = {
	footerHtml: P.string.isRequired,
};
