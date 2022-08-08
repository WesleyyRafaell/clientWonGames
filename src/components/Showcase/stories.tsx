import { Story, Meta } from '@storybook/react'
import GameCardSlider from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import Showcase, { ShowcaseProps } from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ width: 1200, margin: 'auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'News',
  titleProps: { lineLeft: true, lineColor: 'secondary', color: 'black' },
  highlight: highlightMock,
  gamesProps: { items: GameCardSlider }
}
