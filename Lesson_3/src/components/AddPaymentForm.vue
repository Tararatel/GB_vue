<template>
  <div>
    <div class="input-wrapper" v-show="isVisible">
      <input type="text" v-model="date" placeholder="Payment date" />
      <input type="text" v-model="value" placeholder="Payment amount" />
      <input type="text" v-model="category" placeholder="Payment description" />
      <button @click="onSave">ADD +</button>
    </div>
    <button @click="showForm()" v-show="!isVisible">+ ADD NEW COST</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      show: false,
      value: "",
      category: "",
      date: "",
      isVisible: false,
      activeClass: 'is-visible'
    };
  },
  computed: {
      getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
      showForm() {
        this.isVisible = !this.isVisible;
      },
      onSave() {
          const { value, category } = this
          const data = {
              date: this.date || this.getCurrentDate,
              value,
              category
          }

          console.log('emit: addNewPayment',data)

          this.$emit('addNewPayment', data)
      }
  },
};
</script>

<style>
 input {
   max-width: 250px;
 }
 .input-wrapper {
   display: flex;
   flex-direction: column;
   gap: 20px;
 }

 button {
   max-width: 150px;
 }
</style>