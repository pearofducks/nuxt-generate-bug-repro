let counter = 0

export default {
  props: {
    id: {
      default: () => 'component' + counter++
    }
  }
}
