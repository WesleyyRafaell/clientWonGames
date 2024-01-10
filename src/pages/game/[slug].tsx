import Game, { GameTemplateProps } from '../../templates/Game'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAMES_BY_SLUG } from 'graphql/queries/games'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'

const apolloCliente = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloCliente.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games?.data.map((item) => {
    const slug = item.attributes?.slug
    return { params: { slug } }
  })

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloCliente.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAMES_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games?.data.length) {
    return { notFound: true }
  }

  const game = data.games.data[0]

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.src}`,
      gameInfo: {
        title: game.attributes?.name,
        price: game.attributes?.price,
        description: game.attributes?.short_description
      },
      gallery: game.attributes?.gallery?.data.map((item) => ({
        src: `http://localhost:1337${item.attributes?.src}`,
        label: item.attributes?.label
      })),
      description: game.attributes?.description,
      details: {
        developer: game.attributes?.developers?.data[0].attributes?.name,
        releaseDate: game.attributes?.release_date,
        platforms: game.attributes?.platforms?.data.map(
          (platform) => platform.attributes?.name
        ),
        publisher: game.attributes?.publisher?.data?.attributes?.name,
        rating: game.attributes?.rating,
        genres: game.attributes?.categories?.data.map(
          (category) => category.attributes?.name
        )
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
