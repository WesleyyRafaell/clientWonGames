import Base from 'templates/Base'

import GameInfo, { GameInfoProps } from 'components/Gameinfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'

import * as S from './styles'
import TextContent from 'components/TextContent'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
// import Showcase from 'components/Showcase'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <S.SectionUpcoming>
        <Showcase
          title="Upcoming"
          titleProps={{ lineLeft: true, lineColor: 'secondary' }}
          highlight={upcomingHighlight}
          gamesProps={{ items: upcomingGames, color: 'white' }}
        />
      </S.SectionUpcoming>

      <S.SectionRecommendedGames>
        <Showcase
          title="You may like these games"
          titleProps={{ lineLeft: true, lineColor: 'secondary' }}
          gamesProps={{ items: recommendedGames, color: 'white' }}
        />
      </S.SectionRecommendedGames>
    </S.Main>
  </Base>
)

export default Game
