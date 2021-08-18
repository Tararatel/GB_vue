<template>
  <div>
    <Button @handler="isShowForm" :text="'ADD NEW COST'" />
    <PaymentForm v-show="showForm" />
    <PaymentsList />
  </div>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import PaymentForm from '../components/PaymentForm'
import Button from '../components/Button'

export default {
  components: {
    PaymentsList,
    PaymentForm,
    Button
  },
  data () {
    return {
      showForm: false
    }
  },
  methods: {
    isShowForm () {
      this.showForm = !this.showForm
    }
  }
}
</script>

<style>

</style>
