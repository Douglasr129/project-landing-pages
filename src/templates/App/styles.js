import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${(props) => css`
			background: ${props.background};
	`}
	font-size: 1rem;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
`;
