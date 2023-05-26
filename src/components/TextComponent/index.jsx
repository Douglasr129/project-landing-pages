import P from 'prop-types';
import * as Styled from './TextComponent.style';

export const TextComponent = ({ children }) => {
	return (
		<Styled.Container>
			<p>{children}</p>
		</Styled.Container>
	);
};

TextComponent.propTypes = {
	children: P.node.isRequired,
};
