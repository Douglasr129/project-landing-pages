import P from 'prop-types';
import * as Styled from './GridTwoColumns.styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumns = ({
	title,
	text,
	srcImg,
	background = false,
	sectionId = '',
}) => {
	return (
		<SectionBackground background={background} sectionId={sectionId}>
			<Styled.Container background={background}>
				<Styled.TextContainer>
					<Heading uppercase colorDark={!background} as="h2">
						{title}
					</Heading>
					<TextComponent colorDark={!background}>{text}</TextComponent>
				</Styled.TextContainer>
				<Styled.ImageContainer>
					<Styled.Image src={srcImg} alt={title} />
				</Styled.ImageContainer>
			</Styled.Container>
		</SectionBackground>
	);
};

GridTwoColumns.propTypes = {
	title: P.string.isRequired,
	text: P.string.isRequired,
	srcImg: P.string.isRequired,
	background: P.bool,
	sectionId: P.string,
};
