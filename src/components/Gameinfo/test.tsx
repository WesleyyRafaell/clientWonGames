import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Gameinfo from '.'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: '210,00'
}

describe('<Gameinfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<Gameinfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /My Game Title/i })
    ).toBeInTheDocument()

    expect(screen.getByText('Game Description')).toBeInTheDocument()
    expect(screen.getByText('R$ 210,00')).toBeInTheDocument()
  })

  it('should render buttons', () => {
    const { container } = renderWithTheme(<Gameinfo {...props} />)

    expect(
      screen.getByRole('button', { name: /Add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
