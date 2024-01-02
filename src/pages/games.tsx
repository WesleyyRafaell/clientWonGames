import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'

export default function Orders(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      games: data.games.data.map((game: any) => ({
        title: game.attributes.name,
        developer: game.attributes.developers.data[0].attributes.name,
        img: game.attributes.cover.data?.attributes?.url || null,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.attributes.price)
      })),
      filterItems: filterItemsMock
    }
  }
}
