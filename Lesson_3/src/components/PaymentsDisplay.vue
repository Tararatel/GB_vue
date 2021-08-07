<template>
  <div class="list">
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Category</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, idx) in list" :key="idx">
                <td>{{ idx + 1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.value }}</td>
            </tr>
      </tbody>
    </table>

    <paginate
        :page-count="10"
        :click-handler="pageChangeHandler"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'waves-effect'">>
    </paginate>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  data() {
    return {
      page: 3
    }
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
      pageChangeHandler(pageNum) {
          console.log(pageNum);
      }
  }
};
</script>

<style>
    table {
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 14px;
        border-radius: 10px;
        border-spacing: 0;
        text-align: center;
        max-width: 500px;
    }
    th {
        background: #bcebdd;
        color: white;
        text-shadow: 0 1px 1px #2d2020;
        padding: 10px 20px;
    }
    th,
    td {
        border-style: solid;
        border-width: 0 1px 1px 0;
        border-color: white;
    }
    th:first-child,
    td:first-child {
        text-align: left; 
    }
    th:first-child {
        border-top-left-radius: 10px;
    }
    th:last-child {
        border-top-right-radius: 10px;
        border-right: none;
    }
    td {
        padding: 10px 20px;
        background: #f8e391;
    }
    tr:last-child td:first-child {
        border-radius: 0 0 0 10px;
    }
    tr:last-child td:last-child {
        border-radius: 0 0 10px 0;
    }
    tr td:last-child {
        border-right: none;
    }
</style>
