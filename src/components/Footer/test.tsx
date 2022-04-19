import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'
import 'jest-styled-components'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Location/i })
    ).toBeInTheDocument()
  })

  it('should render only two columns in mobile', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByTestId('content')).toHaveStyle({
      'grid-template-columns': 'repeat(2,1fr)'
    })
  })

  it('should render four columns in desktop', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByTestId('content')).toHaveStyleRule(
      'grid-template-columns',
      'repeat(4,1fr)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
