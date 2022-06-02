import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  color?: 'white' | 'black'
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, color }) => css`
    .slick-slider.slick-initialized {
      display: flex;
    }
    .slick-arrow {
      width: 1.8rem;
      cursor: pointer;
    }

    .slick-list {
      width: 100%;
      margin: 0 3.8rem;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
    }

    .slick-arrow {
      color: ${theme.colors[color!]};
      transition: opacity 0.3s linear;
    }
    .slick-arrow.slick-disabled {
      opacity: 0;
      visibility: hidden;
    }

    ${media.lessThan('large')`
    .slick-list, .slick-slide > div  {
      margin: 0;
    }

    .slick-slide > div {
      margin-right: ${theme.spacings.xsmall};
    }
  `}
  `}
`
