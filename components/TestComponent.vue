<template>
  <wrapper-component v-bind="$props">
    <p>{{ id }}</p>
  </wrapper-component>
</template>

<script>
import base from './base'
import WrapperComponent from './WrapperComponent'

export default {
  name: 'TestComponent',
  components: { WrapperComponent },
  extends: base
}
</script>
