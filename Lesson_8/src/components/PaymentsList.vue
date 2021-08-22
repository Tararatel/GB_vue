<template>
  <div
    @contextmenu="show"
  >
    <v-data-table
      :headers="tableHeaders"
      :items="getPaymentsList"
    >
    </v-data-table>
    <v-menu
      v-model="showMenu"
      :position-x="x"
      :position-y="y"
      absolute
      offset-y
    >
      <v-list>
        <v-list-item>Edit</v-list-item>
        <v-list-item>Delete</v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      tableHeaders: [
        { text: '#', value: 'id' },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Value', value: 'price' }
      ],
      showMenu: false,
      x: 0,
      y: 0
    }
  },
  methods: {
    show (event) {
      event.preventDefault()
      this.showMenu = false
      this.x = event.clientX
      this.y = event.clientY
      this.$nextTick(() => {
        this.showMenu = true
      })
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ])
  }
}
</script>

<style>

</style>
