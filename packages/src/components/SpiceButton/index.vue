<script lang="ts" setup>
import type { ButtonVariant } from '../../types'
export interface Props {
  /**
   * ボタンに表示するテキスト
   */
  label: string
  /**
   * ボタンのテーマ
   */
  variant: ButtonVariant
}
export interface Emits {
  (e: 'click', message: string): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const click = () => emit('click', 'MyButton clicked!!!')
</script>

<template>
  <button @click="click">
    {{ label }}
  </button>
</template>
