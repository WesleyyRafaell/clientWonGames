import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import gamesMock from 'components/GameCardSlider/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'

export default function Orders(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock
    }
  }
}
