<template>
  <v-content>
    <v-container>
      <v-simple-table>
        <tbody>
          <tr>
            <td>{{ readData.title }}</td>
          </tr>
          <tr>
            <td>{{ readData.contents }}</td>
          </tr>
        </tbody>
      </v-simple-table><br><br><br>
      <br>
    </v-container>
    <div>
      <v-btn @click="modifyMemo" class="white--text font-weight-bold" color="grey darken-3">수정</v-btn>
      <v-btn @click="deleteMemo" class="white--text font-weight-bold" color="grey darken-3">삭제</v-btn>
      <v-btn @click="gotoMemoPage" class="white--text font-weight-bold" color="grey darken-3">목록으로</v-btn>
    </div>
  </v-content>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['readData', 'myname'])
  },
  methods: {
    gotoMemoPage () {
      this.$store.dispatch('mvPage', 'storage')
    },
    deleteMemo () {
      const storageSeq = this.readData.storageSeq
      const userNo = this.myname.userNo
      this.$store.dispatch('deleteReview', { storageSeq, userNo })
      this.$store.dispatch('mvPage', 'storage')
    },
    modifyMemo () {
      this.$store.dispatch('mvPage', 'modifyStorage')
    }
  }
}
</script>
