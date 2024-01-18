import Home, { HomeTemplateProps } from 'templates/Home'

import gameCardSlider from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: data.banners?.data.map((banner) => ({
        img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
        title: banner.attributes?.title,
        subtitle: banner.attributes?.subtitle,
        buttonLabel: banner.attributes?.button?.label,
        buttonLink: `game/${banner.attributes?.button?.link}`,
        ...(banner.attributes?.ribbon && {
          ribbon: banner.attributes?.ribbon.text,
          ribbonColor: banner.attributes?.ribbon.color,
          ribbonSize: banner.attributes?.ribbon.size
        })
      })),
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
