import styled, { css } from 'styled-components';
import { Container as textComponent } from '../TextComponent/TextComponent.style';
import { Container as SectionCpmtainer } from '../SectionContainer/SectionContainer.styles';

export const Container = styled.footer`
  ${({ theme }) => css`
	text-align: center;
	border-top: 0.1rem solid ${theme.colors.mediumGray};
	a {
      color: inherit;
      text-decoration: none;
    }
		& ${textComponent} {
			font-size: ${theme.font.sizes.small};
		}
		& ${SectionCpmtainer} {
			padding-top: 0;
			padding-bottom: 0;
		}
  `}
`;
