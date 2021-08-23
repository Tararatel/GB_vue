<template>
  <div :class="[$style.wrapper]">
    <header>
      <div :class="[$style.title]">My Personal Costs</div>
    </header>
    <div :class="[$style.content]">
      <payments-display :list="currentElements" />
      <pagination
        :cur="page"
        :n="n"
        :length="paymentsList.length"
        @changePage="onChangePage"
      />
    </div>
    <div :class="[$style.content]">
      <add-payment-form @addNewPayment="addData" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import AddPaymentForm from '@/components/AddPaymentForm';
import PaymentsDisplay from '@/components/PaymentsDisplay';
import Pagination from '@/components/Pagination';
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      currentPage: "dashboard",
      page: 1,
      n: 5,
    };
  },
  methods: {
    ...mapMutations({
      loadData: 'setPaymentListData',
      addDataToStore: 'addDataToPaymentList'
      }
    ),
    ...mapActions({
      fetchListData: 'fetchData'
    }),
    addData(newPayment) {
      this.addDataToStore(newPayment)
      console.log(newPayment);
    },
    onChangePage(p) {
      this.page = p;
    },
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  computed: {
    ...mapGetters({
      paymentsList: 'getPaymentsList'
    }),
    currentElements() {
      const {n, page} = this;
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  },
  async created() {
    await this.fetchListData();
    if(this.$route.params?.page) {
        this.onChangePage(this.$route.params.page)
    }
  },

};
</script>

<style lang="scss" module>
    .wrapper {
    display: block;
    height: 100%;
    }
    .title {
    font-size: 34px;
    color: black;
    font-weight: bold;
    }
    .content {
    padding-top: 30px;
    }
</style>
