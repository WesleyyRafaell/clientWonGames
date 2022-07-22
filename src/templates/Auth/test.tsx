import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Auth title="sign-in">text</Auth>)

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /sign-in/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/text/i)).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
  })
})
