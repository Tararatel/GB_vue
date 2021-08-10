<template>
  <div>
    <div class="input-wrapper" v-show="isVisible">
      <input type="text" v-model="date" placeholder="Payment date" />
      <input type="number" v-model.number="value" placeholder="Payment amount" />
      <div class="input-field col s12">
        <select class="browser-default" v-model="category" v-if="options">
          <option value="" disabled selected>Choose your category</option>
          <option v-for="option in options" :value="option" :key="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="categories">
        <input type="text" v-model="category" placeholder="Your new category" />
        <a class="waves-effect waves-light btn" @click="addCategory">+ NEW CATEGORY</a>
      </div>
      
      <a class="waves-effect waves-light btn" @click="onSave">ADD +</a>
    </div>
    <a class="waves-effect waves-light btn" @click="showForm()" v-show="!isVisible">+ ADD NEW COST</a>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
export default {
  name: "AddPaymentForm",
  data() {
    return {
      data: '',
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
    },
    options() {
      return this.$store.getters.getCategories
    }
  },
  methods: {
    ...mapActions([
      'fetchCategoryList'
    ]),
      showForm() {
        this.isVisible = !this.isVisible;
      },
      onSave() {
          const { value, category } = this
          const data = {
              date: this.date || this.getCurrentDate,
              value,
              category,
              id: this.$store.state.paymentsList.length + 1
          }
          this.$emit('addNewPayment', data)
      },
      addCategory() {
        this.$store.commit('addNewCategory', this.category)
      }
  },
  created() {
    this.fetchCategoryList()
  }
};
</script>

<style>
 input {
   max-width: 250px;
 }
 .input-wrapper {
   display: flex;
   flex-direction: column;
   
 }

 .btn {
   max-width: 160px;
 }

 .input-field {
   max-width: 250px;
 }
</style>