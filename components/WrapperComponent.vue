<template>
  <div :aria-labelledby="id">
    <slot />
  </div>
</template>

<script>
import base from './base'

export default {
  name: 'WrapperComponent',
  extends: base
}
</script>
