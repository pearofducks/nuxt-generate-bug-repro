<template>
  <div>
    <test-component />
    <test-component />
    <test-component />
    <test-component />
  </div>
</template>

<script>
import TestComponent from '~/components/TestComponent'

export default {
  name: 'index',
  components: { TestComponent }
}
</script>
