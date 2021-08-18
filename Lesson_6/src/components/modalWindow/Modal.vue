<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.content]">
      <PaymentForm v-if="name === 'PaymentForm'" />
    </div>
  </div>
</template>

<script>
import PaymentForm from '../PaymentForm'

export default {
  components: {
    PaymentForm
  },
  props: {
    name: String,
    settings: Object
  }
}
</script>

<style module lang="sass">
  .wrapper
    background-color: rgba(50, 50, 50, 0.5)
    width: 100%
    height: 100vh
    position: absolute

  .content
    position: absolute
    top: 62px

</style>
