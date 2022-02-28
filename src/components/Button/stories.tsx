import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const withIcons: Story = (args) => <Button {...args} />

withIcons.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}
