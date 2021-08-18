<template>
  <div>
    <transition name="fade">
      <Context v-if="isShowContext" :id="id"  />
    </transition>
    <div :class="[$style.paymentsList]">
      <div :class="[$style.payment]">
        <h4>#</h4>
        <h4>Date</h4>
        <h4>Category</h4>
        <h4>Price</h4>
      </div>
      <div :class="[$style.payment]" v-for="(item, index) in currentList" :key="index">
        <div>{{ item.id + 1 }}</div>
        <div>{{ item.date }}</div>
        <div>{{ item.category }}</div>
        <div>{{ item.price }}</div>
        <div @click="showContext">...</div>
      </div>
    </div>
    <Pagination  @currentList="showCurrentList"
    :itemsOnPage="itemsOnPage"
    :currentPage="currentPage" />
  </div>
</template>

<script>
import Pagination from './Pagination'
import { mapGetters } from 'vuex'

export default {
  components: {
    Pagination,
    Context: () => import('./contextMenu/Context')
  },
  data () {
    return {
      currentPage: 1,
      itemsOnPage: 5,
      isShowForm: false,
      isShowContext: false,
      id: null
    }
  },
  methods: {
    showCurrentList (page) {
      this.currentPage = page
    },
    showContext (e) {
      this.id = +e.target.parentElement.childNodes[0].innerHTML
      this.$context.show()
    },
    onShowContext () {
      this.isShowContext = true
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    currentList () {
      return this.getPaymentsList.slice(this.itemsOnPage * (this.currentPage - 1), this.itemsOnPage * this.currentPage)
    },
    currentId () {
      return { id: 2 }
    }
  },
  mounted () {
    this.$context.EventBus.$on('show', this.onShowContext)
  }
}
</script>

<style>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>

<style module lang="sass">
  .payment
    display: grid
    grid-template-columns: .4fr 2fr 2fr .5fr .2fr
    border-bottom: 1px solid #e0e0e0
    height: 40px
    align-items: center
    color: #345678
    max-width: 600px

    &:last-child
      border: 0

</style>
