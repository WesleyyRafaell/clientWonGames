import { Story, Meta } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
        defaultChecked
        {...args}
      />
    </div>
  </>
)
