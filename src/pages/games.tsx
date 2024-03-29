import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export default function Orders(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      games: data.games?.data.map((game) => ({
        title: game?.attributes?.name,
        slug: game.attributes?.slug,
        developer: game?.attributes?.developers?.data[0].attributes?.name,
        img: game?.attributes?.cover?.data?.attributes?.url || null,
        price: game?.attributes?.price
      })),
      filterItems: filterItemsMock
    }
  }
}
