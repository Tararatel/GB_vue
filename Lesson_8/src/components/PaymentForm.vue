<template>
  <form
    class="overflow-hidden pa-2 white"
  >
    <v-text-field
      v-model="date"
      label="Payment date"
    >
    </v-text-field>
    <v-select
      v-model="category"
      :items="getCategories"
      label="Payment category"
    >
    </v-select>
    <v-text-field
      v-model="price"
      label="Payment amount"
    >
    </v-text-field>

    <v-btn
    class="mr-2"
      @click="save"
      color="teal"
      dark
      depressed
      small
    >ADD</v-btn>
    <v-btn
      @click="clearForm"
      color="teal"
      dark
      depressed
      small
    >CLEAR</v-btn>
  </form>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      id: null,
      date: '',
      category: '',
      price: null
    }
  },
  methods: {
    ...mapMutations([
      'AddPaymentsListData',
      'updatePaymentsList'
    ]),
    save () {
      const data = {
        id: this.getPaymentsListLastId,
        date: this.date || this.getCurrentDate,
        category: this.category,
        price: this.price
      }
      this.AddPaymentsListData(data)
    },
    clearForm () {
      this.date = ''
      this.category = ''
      this.price = null
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsListLastId',
      'getPaymentsList',
      'getCategories'
    ]),
    getCurrentDate () {
      const today = new Date()
      const day = today.getDate()
      const month = today.getMonth()
      const year = today.getFullYear()
      return `${day}.${month < 10 ? '0' + (month + 1) : month + 1}.${year}`
    }
  },
  mounted () {
    if (this.$route.name === 'addPayment') {
      this.category = this.$route.params.category || ''
      this.price = this.$route.query.value || null
      if (this.category && this.price) {
        setTimeout(() => this.save(), 10)
      }
    }
    if (this.data) {
      const { id, date, category, price } = this.currentPayment(this.data)
      this.id = id
      this.date = date
      this.category = category
      this.price = price
    }
  }
}
</script>

<style>

</style>
