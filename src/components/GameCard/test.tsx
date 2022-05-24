import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the component GameCard', () => {
    renderWithTheme(
      <GameCard
        title="Population Zero"
        developer="Rockstar Games"
        img="https://source.unsplash.com/user/willianjusten/300x140"
        price="R$ 235,00"
      />
    )

    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Population Zero/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderiza o componente
    renderWithTheme(
      <GameCard
        title="Population Zero"
        developer="Rockstar Games"
        img="https://source.unsplash.com/user/willianjusten/300x140"
        price="R$ 235,00"
      />
    )

    // preço não tenha line-through
    // preço tenha o background secundário
    expect(screen.getByText('R$ 235,00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(
      <GameCard
        title="Population Zero"
        developer="Rockstar Games"
        img="https://source.unsplash.com/user/willianjusten/300x140"
        price="R$ 200,00"
        promotionalPrice="R$ 15,00"
      />
    )
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    expect(screen.getByText('R$ 200,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 15,00')).toBeInTheDocument()
    // preço tenha line-through (200)
    expect(screen.getByText('R$ 200,00')).toHaveStyle({
      'text-decoration': 'line-through'
    })
    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ height: '2.4rem', fontSize: '1.2rem' })
    expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' })
  })
})
