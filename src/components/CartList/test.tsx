import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import CartList from '.'

import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 330,00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 330,00" hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty Dropdown', () => {
    renderWithTheme(<CartList />)

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
