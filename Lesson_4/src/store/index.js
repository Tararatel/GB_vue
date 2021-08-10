'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categories: [] 
    },
    mutations: {
        setPaymentListData(state, payload) {
            state.paymentsList = payload;
        },
        addDataToPaymentList(state, payload) {
            state.paymentsList.push(payload);
        },
        setCategoriesListData(state, payload) {
            state.categories = payload;
        },
        addNewCategory(state, payload) {
            state.categories.push(payload);
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
        },
        getCategories: state => state.categories
    },
    actions: {
        fetchData({commit}) {
            if(this.state.paymentsList.length) return;
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = [
                        { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                        { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                        { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 },
                        { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                        { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                        { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
                    ];
                    for(let i = 0; i < 20; i++) {
                        items.push({
                            date: "08.08.2021",
                            category: "sport",
                            value: i,
                            id: i + 7
                        });
                    }
                    resolve(items);
                }, 2000);
            })
            .then(res => commit('setPaymentListData', res));
        },

        fetchCategoryList({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const categories = ['Sport', 'Food', 'Education', 'Internet', 'Other'];
                    
                    resolve(categories);
                }, 2000);
            })
            .then(res => commit('setCategoriesListData', res));
        }
    },
});