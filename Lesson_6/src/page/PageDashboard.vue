<template>
  <div>
    <Button @handler="isShowForm" :text="'ADD NEW COST'" />
    <PaymentsList />
  </div>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import Button from '../components/Button'

export default {
  components: {
    PaymentsList,
    Button
  },
  methods: {
    isShowForm () {
      this.$modal.show('PaymentForm')
    }
  }
}
</script>

<style>

</style>
