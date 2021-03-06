import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { RibbonProps } from '.'

const wrapperModfiers = {
  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    right: -2rem;
    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.4rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    right: -1.5rem;
    &::before {
      top: 2.4rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    position: absolute;
    z-index: ${theme.layers.base};
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    background-color: ${theme.colors[color!]};
    ${!!size && wrapperModfiers[size](theme)};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
      border-left-color: ${darken(0.2, theme.colors[color!])};
      border-top-color: ${darken(0.2, theme.colors[color!])};
    }
  `}
`
