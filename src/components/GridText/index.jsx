import P from 'prop-types';
import * as Styled from './GridText.styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({
	title,
	description,
	grid,
	background = false,
	sectionId = '',
}) => {
	return (
		<SectionBackground background={background} sectionId={sectionId}>
			<Styled.Container>
				<Heading size="huge" uppercase colorDark={!background} as="h2">
					{title}
				</Heading>
				<TextComponent colorDark={!background}>{description}</TextComponent>
				<Styled.Grid>
					{grid.map((el) => (
						<Styled.GridElement key={el.title}>
							<Heading size="medium" colorDark={!background} as="h3">
								{el.title}
							</Heading>
							<TextComponent colorDark={!background}>
								{el.description}
							</TextComponent>
						</Styled.GridElement>
					))}
				</Styled.Grid>
			</Styled.Container>
		</SectionBackground>
	);
};

GridText.propTypes = {
	background: P.bool,
	title: P.string.isRequired,
	description: P.string.isRequired,
	grid: P.arrayOf(
		P.shape({
			title: P.string.isRequired,
			description: P.string.isRequired,
		}),
	).isRequired,
	sectionId: P.string,
};
