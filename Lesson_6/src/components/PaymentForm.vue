<template>
  <div :class="[$style.paymentForm]">
    <div :class="[$style.close]" @click="clearForm">x</div>
    <input :class="[$style.paymentForm__input]" placeholder="Payment date" v-model="date">
    <select :class="[$style.paymentForm__input]" v-model="category">
      <option disabled selected value="">Payment category</option>
      <option v-for="category in categoryName"
      :key="category">
      {{ category }}
      </option>
    </select>
    <input :class="[$style.paymentForm__input]" placeholder="Payment amount" v-model.number="price">
    <router-link to="/add/payment/Food?value=200" tag="button">Food +200</router-link>
    <router-link to="/add/payment/Transport?value=50" tag="button">Transport +50</router-link>
    <router-link to="/add/payment/Entertainment?value=2000" tag="button">Enterteinment +2000</router-link>
    <Button :text="'ADD'" @handler="save" />
  </div>
</template>

<script>
import Button from './Button'
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    Button
  },
  props: {
    data: Number
  },
  data () {
    return {
      id: null,
      date: '',
      category: '',
      price: null,
      categoryName: ['Food', 'Transport', 'Housing', 'Clothing', 'Education', 'Entertainment'],
      edit: false
    }
  },
  methods: {
    ...mapMutations([
      'AddPaymentsListData',
      'updatePaymentsList'
    ]),
    save () {
      if (this.data) {
        const data2 = {
          id: this.id,
          date: this.date,
          category: this.category,
          price: this.price
        }
        this.updatePaymentsList(this.currentPayment(data2))
        return
      }
      const data1 = {
        id: this.getPaymentsListLastId,
        date: this.date || this.getCurrentDate,
        category: this.category,
        price: this.price
      }
      this.AddPaymentsListData(data1)
    },
    clearForm () {
      this.date = ''
      this.category = ''
      this.price = null
      this.$modal.close()
    },
    currentPayment (id) {
      const payment = this.getPaymentsList.filter(item => item.id === id)
      return { ...payment[0] }
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsListLastId',
      'getPaymentsList'
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

<style module lang="sass">
  .paymentForm
    display: flex
    flex-direction: column
    width: 40vw
    max-width: 400px
    position: fixed
    left: 30vw
    background-color: white
    border: 1px solid #e0e0e0
    border-radius: 5px
    padding-left: 8px
    padding-right: 8px
    padding-bottom: 8px

    &__input
      height: 40px
      border: 1px solid #e0e0e0
      border-radius: 3px
      margin-bottom: 10px
      outline: none
      padding: 8px
      color: #6f6e6e

  .close
    align-self: flex-end
    color: #6f6e6e
    cursor: pointer

</style>
