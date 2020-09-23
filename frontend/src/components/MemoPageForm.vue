<template>
  <v-content>
    <v-container>
      <div v-if="!(!lists || lists.length === 0)">
        <v-simple-table>
          <tbody>
            <tr v-for="list of paginatedData" :key="list.storageSeq">
              <td width=50 style="color: gray">{{ list.storageSeq }}</td>
              <td width=250><a @click="clickData(list.storageSeq)">{{ list.title }}</a></td>
              <td width=250>{{ list.type }}</td>
            </tr>
          </tbody>
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
