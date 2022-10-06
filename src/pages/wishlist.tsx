import WishList, { WishListTemplateProps } from 'templates/WishList'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const WishListPage = (props: WishListTemplateProps) => {
  return <WishList {...props} />
}
export default WishListPage

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock
    }
  }
}
