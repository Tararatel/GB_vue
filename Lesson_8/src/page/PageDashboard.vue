<template>
  <v-row>
    <v-col class="col-6">
      <v-dialog
        v-model="showForm"
        width="350"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="teal"
            dark
            small
            depressed
            v-on="on"
          >
            ADD NEW COST
            <v-icon dark small>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <PaymentForm />
      </v-dialog>
      <PaymentsList />
    </v-col>
    <v-col class="pt-10 col-4">
      <Chart :chartData="datacollection" />
    </v-col>
  </v-row>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import PaymentForm from '../components/PaymentForm.vue'
import Chart from '../components/Chart.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    PaymentsList,
    PaymentForm,
    Chart
  },
  data () {
    return {
      showForm: false,
      datacollection: null
    }
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: this.getCategories,
        datasets: [{
          label: 'Costs by categories',
          data: this.getData(),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(50, 205, 86)',
            'rgb(55, 60, 220)'
          ],
          hoverOffset: 4
        }]
      }
    },
    getTotalPrice (cat) {
      const data = this.getPaymentsList
      const filteredData = data.filter(item => item.category === cat)
      const totalPrice = filteredData.reduce((acc, cur) => acc + Number(cur.price), 0)
      return totalPrice
    },
    getData () {
      const data = this.getCategories.map((cur) => {
        return this.getTotalPrice(cur)
      })
      return data
    }
  },
  computed: {
    ...mapGetters([
      'getCategories',
      'getPaymentsList'
    ])
  },
  beforeMount () {
    this.fillData()
  },
  mounted () {
    this.getData()
  }
}
</script>

<style>

</style>
