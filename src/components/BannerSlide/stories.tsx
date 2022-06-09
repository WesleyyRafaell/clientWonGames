import { Story, Meta } from '@storybook/react'
import BannerSlide, { BannerSliderProps } from '.'

import items from './mock'

export default {
  title: 'BannerSlide',
  component: BannerSlide,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlide {...args} />
  </div>
)
