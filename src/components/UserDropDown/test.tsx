import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import UserDropDown from '.'

describe('<UserDropDown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropDown username="wess" />)

    expect(screen.getByText(/wess/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropDown username="Willian" />)

    fireEvent.click(screen.getByText(/willian/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
