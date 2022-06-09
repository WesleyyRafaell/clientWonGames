import { GameCardProps } from 'components/GameCard'
import { BannerProps } from 'components/Banner'
import Highlight, { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import BannerSlide from 'components/BannerSlide'
import GameCardSlider from 'components/GameCardSlider'

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
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGamesSlider} />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most popular
        </Heading>
        <Highlight {...mostPopularHighLight} />
        <GameCardSlider items={mostPopularSlider} color="white" />
      </S.SectionMostPopular>
    </Container>

    <Container>
      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>
        <GameCardSlider items={upcomingSlider} color="white" />
        <Highlight {...upcomingHighLight} />
        <GameCardSlider items={upcomingMoreGameSlider} color="white" />
      </S.SectionUpcoming>
    </Container>

    <Container>
      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free games
        </Heading>
        <Highlight {...freeGamesHighLight} />
        <GameCardSlider items={freeGamesSlider} color="white" />
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
