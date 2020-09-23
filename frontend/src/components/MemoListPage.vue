<template>
  <v-content>
    <v-container>
      <div v-if="!(!lists || lists.length === 0)" class="bd">
        <v-simple-table>
          <table>
            <tr>
              <th align="center" width="150">No</th>
              <th align="center" width="850">Title</th>
              <th align="center" width="800">Memo</th>
            </tr>
            <tbody>
              <tr v-for="list of paginatedData" :key="list.storageSeq">
                <td align="left" style="color: #000000">{{ list.storageSeq }}</td>
                <td><a @click="clickData(list.storageSeq)" style="color: #022a2a">{{ list.title }}</a></td>
                <td>{{ list.contents }}</td>
              </tr>
            </tbody>
          </table>
        </v-simple-table>
        <div class="btn-cover" align="center">
          <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
            <v-icon>mdi-chevron-left</v-icon>
          </button>
          <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }}</span>
          <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
            <v-icon>mdi-chevron-right</v-icon>
          </button>
        </div>
      </div>
      <div v-else>
        <v-simple-table>
          <tr>
            <td align="center">메모가 없습니다.
            </td>
          </tr>
        </v-simple-table>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      lists: state => state.storageData
    }),
    pageCount () {
      const listLen = this.lists.length
      const listSize = 10

      let page = Math.floor(listLen / listSize)
      if (listLen % listSize > 0) {
        page += 1
      }

      return page
    },
    paginatedData () {
      const start = this.pageNum * 10
      const end = start + 10
      return this.lists.slice(start, end)
    }
  },
  data () {
    return {
      pageNum: 0
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1
    },
    prevPage () {
      this.pageNum -= 1
    },
    clickData (storageSeq) {
      this.$store.dispatch('readStorageData', storageSeq)
      this.$store.dispatch('mvPage', 'readStorage')
    }
  }
}
</script>

<style>
.bd tr:nth-child(odd) {
  background-color: #c1c1c1;
}
.bd tr:nth-child(even) {
  background-color: #c1c1c1;
}
.bd tr {
  border-bottom: 1px solid #ffffff;
}
.bd th:first-child,
.bd td:first-child {
  padding-left: 16px;
}
.bd td,
.bd th {
  padding: 8px 8px;
  display: table-cell;
  text-align: left;
  vertical-align: top;
}
.bd th {
  font-weight: bold;
}
.bd {
  font-size: 13px!important;
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  display: table;
}
</style>
