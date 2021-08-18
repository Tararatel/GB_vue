<template>
  <div>
    <div>
      <div @click="showForm(id)">Редактировать</div>
    </div>
    <div>
      <div @click="deleteItem">Удалить</div>
    </div>
    <PaymentForm v-if="shown" :data="id" />
  </div>
</template>

<script>
import PaymentForm from '../PaymentForm'
import { mapMutations } from 'vuex'

export default {
  components: {
    PaymentForm
  },
  props: {
    id: Number
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    ...mapMutations([
      'deletePayment'
    ]),
    showForm () {
      this.shown = true
    },
    deleteItem () {
      this.deletePayment(this.id)
    }
  }
}
</script>
