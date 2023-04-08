import Button from './index.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import type { ButtonVariant } from '../../types'

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: "<Button v-bind='args' />",
  }),
  tags: ['autodocs'],
  args: {
    label: 'ログイン',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['primary', 'secondary'] as const satisfies readonly ButtonVariant[],
    },
    onClick: {
      action: 'onClick',
    },
  },
}

export const Default: Story = {}

export default meta
