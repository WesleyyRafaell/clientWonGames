import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import bannerMock from 'components/BannerSlide/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGamesSlider: [gamesMock[0]],
  mostPopularHighLight: highlightMock,
  mostPopularSlider: [gamesMock[0]],
  upcomingHighLight: highlightMock,
  upcomingSlider: [gamesMock[0]],
  upcomingMoreGameSlider: [gamesMock[0]],
  freeGamesHighLight: highlightMock,
  freeGamesSlider: [gamesMock[0]]
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Upcoming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Free games/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // highlight
    expect(screen.getAllByText(/Read Dead is back/i)).toHaveLength(3)
  })
})
