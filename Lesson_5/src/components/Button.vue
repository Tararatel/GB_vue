<template>
  <button :class="[$style.btn]" @click="handler">{{ text }}</button>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    text: String
  },
  methods: {
    handler () {
      this.$emit('handler')
    }
  }
}
</script>

<style module lang="sass">
  .btn
    width: 170px
    align-self: flex-end
    height: 32px
    background-color: #66bcc7
    border: 1px solid #66bcc7
    border-radius: 3px
    position: relative
    color: white
    outline: none
    cursor: pointer

    &::after
      content: '+'
      position: absolute
      right: 12px

</style>
