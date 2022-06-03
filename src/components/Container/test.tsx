import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helper'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(screen.getByText('Won Games').parentElement).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(screen.getByText('Won Games').parentElement).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `)
  })
})
