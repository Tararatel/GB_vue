<template>
  <div :class="[$style.pagination]">
    <button :class="[$style.pagination__button]" @click="onClick(currentPage - 1)">{{ innerButton[0] }}</button>
    <div :class="{[$style.pagination__item]: true, [$style.pagination__item_active]: currentPage === item}"
      v-for="(item, index) in pageAmount"
      :key="index"
      @click="onClick(item)">
    {{ item }}
    </div>
    <button :class="[$style.pagination__button]" @click="onClick(currentPage + 1)">{{ innerButton[1] }}</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    itemsOnPage: Number,
    currentPage: Number
  },
  data () {
    return {
      innerButton: ['<', '>']
    }
  },
  methods: {
    onClick (page) {
      if (page < 1 || page > this.pageAmount) {
        return
      }
      this.$emit('currentList', page)
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsListLastId'
    ]),
    pageAmount () {
      return Math.ceil(this.getPaymentsListLastId / this.itemsOnPage)
    }
  }
}
</script>

<style module lang="sass">
  .pagination
    height: 38px
    display: flex
    justify-content: center
    align-items: center
    border: 1px solid #e0e0e0
    border-radius: 5px
    max-width: 600px

    &__item
      margin: 0 10px
      color: #6f6e6e

      &_active
        color: #66bcc7

      &:hover
        color: #66bcc7
        cursor: pointer

    &__button
      margin: 0 10px
      outline: none
      border: 0
      background-color: transparent
      color: #6f6e6e

      &:hover
        color: #66bcc7
        cursor: pointer

</style>
