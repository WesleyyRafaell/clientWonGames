import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from '../components/BannerSlide/mock'
import gameCardSlider from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGamesSlider: gameCardSlider,
      mostPopularHighLight: highlightMock,
      mostPopularSlider: gameCardSlider,
      upcomingHighLight: highlightMock,
      upcomingSlider: gameCardSlider,
      upcomingMoreGameSlider: gameCardSlider,
      freeGamesHighLight: highlightMock,
      freeGamesSlider: gameCardSlider
    }
  }
}
