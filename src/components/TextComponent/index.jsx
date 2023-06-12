import P from 'prop-types';
import * as Styled from './TextComponent.style';

export const TextComponent = ({ children, colorDark = true }) => {
	return (
		<Styled.Container
			colorDark={colorDark}
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	);
};

TextComponent.propTypes = {
	children: P.node.isRequired,
	colorDark: P.bool,
};
