import Base from 'templates/Base'

import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'

import { HighlightProps } from 'components/Highlight'
import GameCard, { GameCardProps } from 'components/GameCard'

import * as S from './styles'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'

export type WishListTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const WishList = ({
  games = [],
  recommendedGames,
  recommendedHighlight
}: WishListTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        WishList
      </Heading>

      {games.length ? (
        <S.GridContainer>
          {games?.map((item, index) => (
            <GameCard key={`WishList-${index}`} {...item} />
          ))}
        </S.GridContainer>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

      <Divider />

      <Showcase
        title="You may like these games"
        titleProps={{ lineLeft: true, lineColor: 'secondary' }}
        highlight={recommendedHighlight}
        gamesProps={{ items: recommendedGames, color: 'white' }}
      />
    </Container>
  </Base>
)

export default WishList
