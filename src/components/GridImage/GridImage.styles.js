import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/TextComponent.style';

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.spacing.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.large};
  `}
`;

export const GridElement = styled.div`
  ${() => css`
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    transition: all 300ms ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;
