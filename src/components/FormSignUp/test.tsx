import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/Nome/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Sign in now/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the text and link to sign in', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByRole('link', { name: /Sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/Already have an account?/i)).toBeInTheDocument()
  })
})
