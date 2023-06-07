import P from 'prop-types';
import * as Styled from './SectionContainer.styles';

export const SectionContainer = ({ children }) => {
	return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
	children: P.node.isRequired,
};
