import Heading, { HeadingProps } from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider, { GameCardSliderProps } from 'components/GameCardSlider'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  titleProps?: Omit<HeadingProps, 'children'>
  highlight?: HighlightProps
  gamesProps?: GameCardSliderProps
}

const Showcase = ({
  title,
  titleProps,
  highlight,
  gamesProps
}: ShowcaseProps) => (
  <S.Sections>
    {!!title && <Heading {...titleProps}>{title}</Heading>}
    {!!highlight && <Highlight {...highlight} />}

    {!!gamesProps && (
      <GameCardSlider items={gamesProps?.items} color={gamesProps?.color} />
    )}
  </S.Sections>
)

export default Showcase
