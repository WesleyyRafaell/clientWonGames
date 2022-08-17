import styled, { css } from 'styled-components'

import * as RibbonStyles from 'components/Ribbon/styles'
import * as Button from 'components/Button/styles'

import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 125.3rem;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    position: relative;

    ${Button.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.medium} ${theme.spacings.large};

      ${RibbonStyles.Wrapper} {
        right: ${theme.spacings.large};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};
        &:before {
          border: none;
        }
      }
    `}
  `}
`

export const ButtonsContainer = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;

    ${Button.Wrapper} {
      width: 18.4rem
    }
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    line-height: 2.1rem;
    margin-bottom: ${theme.spacings.small};
    max-width: 66.3rem;
  `}
`
