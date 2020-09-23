<template>
  <v-content>
    <v-container>
      <v-simple-table>
        <tbody>
          <tr>
              <td>
              <v-text-field
                v-model="title"
                color="grey darken-3"
              ></v-text-field></td>
          </tr>
          <tr>
            <td><v-text-field
                  v-model="contents"
                  color="grey darken-3"
                ></v-text-field></td>
          </tr>
        </tbody>
      </v-simple-table><br><br><br>
    </v-container>
    <div>
      <v-btn @click="modifyReview" class="white--text font-weight-bold" color="grey darken-3">저장</v-btn>
      <v-btn @click="gotoReview" class="white--text font-weight-bold" color="grey darken-3">뒤로가기</v-btn>
      <v-btn @click="gotoReviewPage" class="white--text font-weight-bold" color="grey darken-3">목록으로</v-btn>
    </div>
  </v-content>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['readData', 'myname'])
  },
  data () {
    return {
      title: '',
      contents: '',
      review: ''
    }
  },
  methods: {
    gotoReviewPage () {
      this.$store.dispatch('getStorageData', this.myname.userNo)
      this.$store.dispatch('mvPage', 'storage')
    },
    gotoReview () {
      this.$store.dispatch('mvPage', 'readStorage')
    },
    modifyReview () {
      const title = this.title
      const contents = this.contents
      const review = this.review
      const image = this.readData.image
      const userNo = this.readData.userNo
      const storageSeq = this.readData.storageSeq
      const type = this.readData.type
      this.$store.dispatch('modifyReview', { title, contents, review, image, userNo, storageSeq, type })
      this.$store.dispatch('mvPage', 'readStorage')
    }
  },
  created () {
    console.log('created')

    this.title = this.readData.title
    this.contents = this.readData.contents
    this.review = this.readData.review
  },
  updated () {
    console.log('updated')
  }
}
</script>
