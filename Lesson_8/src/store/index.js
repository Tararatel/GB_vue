'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const data = [
  {
    id: 1,
    date: '12.08.2021',
    category: 'Clothing',
    price: 230
  },
  {
    id: 2,
    date: '12.08.2021',
    category: 'Food',
    price: 230
  },
  {
    id: 3,
    date: '12.08.2021',
    category: 'Transport',
    price: 230
  },
  {
    id: 4,
    date: '12.08.2021',
    category: 'Transport',
    price: 230
  },
  {
    id: 5,
    date: '12.08.2021',
    category: 'Food',
    price: 230
  },
  {
    id: 6,
    date: '12.08.2021',
    category: 'Education',
    price: 230
  },
  {
    id: 7,
    date: '12.08.2021',
    category: 'Education',
    price: 230
  },
  {
    id: 8,
    date: '12.08.2021',
    category: 'Education',
    price: 230
  }
];

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryName: ['Food', 'Transport', 'Housing', 'Clothing', 'Education']
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload;
    },
    AddPaymentsListData (state, payload) {
      state.paymentsList.push(payload);
    },
    updatePaymentsList (state, payload) {
      const newList = state.paymentsList;
      newList[payload.id] = payload;
      state.paymentsList = [...newList];
    },
    deletePayment (state, payload) {
      state.paymentsList.splice(payload - 1, 1);
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListLastId: state => state.paymentsList.length + 1,
    getCategories: state => state.categoryName
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = data;
          resolve(items);
        }, 0);
      })
        .then(res => {
          commit('setPaymentsListData', res);
        });
    }
  }
});
