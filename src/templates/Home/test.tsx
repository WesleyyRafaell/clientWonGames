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

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlide', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlide"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock BannerSlide')).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
  })
})
