import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'
import * as S from './styles'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/red-dead-img.png',
  buttonLabel: 'Buy Now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy Now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(screen.getByTestId('background')).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImg="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align rigth by default', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(screen.getByTestId('background')).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    )

    expect(screen.getByTestId('background')).toHaveStyleRule(
      'text-align',
      'right',
      { modifier: `${S.Content}` }
    )
  })

  it('should render align left when props is passed', () => {
    renderWithTheme(<Highlight {...props} aligment="left" />)

    expect(screen.getByTestId('background')).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    )

    expect(screen.getByTestId('background')).toHaveStyleRule(
      'text-align',
      'left',
      { modifier: `${S.Content}` }
    )
  })
})
