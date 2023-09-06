import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

export default function Orders(props: GamesTemplateProps) {
  console.log(props)
  return <GamesTemplate />
}

export function getServerSideProps() {
  return {
    props: {
      games: []
    }
  }
}
