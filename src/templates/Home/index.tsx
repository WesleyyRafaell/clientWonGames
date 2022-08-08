import Menu from 'components/Menu'
import BannerSlide from 'components/BannerSlide'
import Showcase from 'components/Showcase'
import Footer from 'components/Footer'

import { GameCardProps } from 'components/GameCard'
import { BannerProps } from 'components/Banner'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesSlider: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularSlider: GameCardProps[]
  upcomingHighLight: HighlightProps
  upcomingSlider: GameCardProps[]
  upcomingMoreGameSlider: GameCardProps[]
  freeGamesHighLight: HighlightProps
  freeGamesSlider: GameCardProps[]
}

const Home = ({
  banners,
  newGamesSlider,
  mostPopularHighLight,
  mostPopularSlider,
  upcomingHighLight,
  upcomingSlider,
  upcomingMoreGameSlider,
  freeGamesHighLight,
  freeGamesSlider
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlide items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Showcase
          title="News"
          titleProps={{
            lineLeft: true,
            lineColor: 'secondary',
            color: 'black'
          }}
          gamesProps={{
            items: newGamesSlider
          }}
        />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Showcase
          title="Most popular"
          titleProps={{ lineLeft: true, lineColor: 'secondary' }}
          highlight={mostPopularHighLight}
          gamesProps={{ items: mostPopularSlider, color: 'white' }}
        />
      </S.SectionMostPopular>
    </Container>

    <Container>
      <S.SectionUpcoming>
        <Showcase
          title="Upcoming"
          titleProps={{ lineLeft: true, lineColor: 'secondary' }}
          gamesProps={{ items: upcomingSlider, color: 'white' }}
        />
        <Showcase
          highlight={upcomingHighLight}
          gamesProps={{ items: upcomingMoreGameSlider, color: 'white' }}
        />
      </S.SectionUpcoming>
    </Container>

    <Container>
      <S.SectionFreeGames>
        <Showcase
          title="Free games"
          titleProps={{ lineLeft: true, lineColor: 'secondary' }}
          highlight={freeGamesHighLight}
          gamesProps={{ items: freeGamesSlider, color: 'white' }}
        />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
