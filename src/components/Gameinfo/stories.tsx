import { Story, Meta } from '@storybook/react'
import Gameinfo, { GameInfoProps } from '.'

const mockGame = {
  title: 'Borderlands 3',
  price: '215,00',
  description:
    'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.'
}

export default {
  title: 'Game/Gameinfo',
  component: Gameinfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
} as Meta

export const Default: Story<GameInfoProps> = (args) => <Gameinfo {...args} />
