import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    developer: 'Different Tales',
    platforms: ['windows', 'linux', 'mac'],
    releaseDate: '2020-11-21T23:00:00',
    genres: ['Role-playing', 'Narrative'],
    rating: 'BR0',
    publisher: 'EA'
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '110rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
