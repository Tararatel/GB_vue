<template>
  <ul class="pagination">
      <li class="waves-effect"><a href="#!"><i class="material-icons" @click="onClick(cur - 1)">chevron_left</i></a></li>
      <li class="waves-effect" v-for="page in amount" :key="page" @click="onClick(page)"><a href="#!">{{ page }}</a></li>
      <li class="waves-effect"><a href="#!"><i class="material-icons" @click="onClick(cur + 1)">chevron_right</i></a></li>
  </ul>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        length: Number,
        n: {
            type: Number,
            default: 5,
        },
        cur: Number,

    },
    computed: {
        amount() {
            return Math.ceil(this.length / this.n)
        }
    },
    methods: {
        onClick(p) {
            if(p < 1 || p > this.amount) {
                return
            }
            this.$emit('changePage', p)
        }
    }
}
</script>

<style>
</style>