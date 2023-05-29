/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.p`
	${({ theme, colorDark }) => css`
		color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
		font-size: ${theme.font.sizes.medium}
	`}
`;
