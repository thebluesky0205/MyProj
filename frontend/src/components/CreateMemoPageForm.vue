<template>
  <v-container>
    <div v-if="!(memo=='')">
      <v-simple-table class="blue-grey lighten-4" width=300>
        <template v-slot:default>
          <tr>
            <td rowspan="2" width=200><img :src="memo.image" width=200 height=300></td>
            <td width=100 class="font-weight-bold">{{ memo.title }}</td>
          </tr>
          <tr>
            <td width=200>{{ memo.contents }}</td>
          </tr>
        </template>
      </v-simple-table>
    </div>
    <div v-else align="left" style="margin-top: 70px">
      <v-col
        sm="3"
        cols="10"
      >
        <v-text-field
          style="margin-right: 150px"
          v-model="title"
          label="Title"
          background-color="grey"
          color="grey darken-3"
        ></v-text-field>
      </v-col>
    </div>
    <v-textarea
      background-color="grey"
      color="grey darken-3"
      label="Contents"
      v-model="contents"
      width="155"
    ></v-textarea>
    <v-card-actions>
      <v-btn style="margin-left: 50px" @click="register" class="white--text font-weight-bold" color="grey darken-3">메모하기</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CreateMemo',
  computed: {
    ...mapState(['memo', 'myinfo'])
  },
  data () {
    return {
      contents: '',
      title: ''
    }
  },
  methods: {
    init () {
      this.$store.dispatch('init')
    },
    register () {
      if (this.title === '' || this.contents === '') {
        alert('입력하지 않은 정보가 있습니다.')
      } else {
        const title = this.title
        const contents = this.contents
        const userNo = this.myinfo.userNo
        this.$store.dispatch('storageRegister', { title, contents, userNo })
        alert('메모가 기록되었습니다.')
      }
    }
  },
  beforeCreate () {
    this.$store.dispatch('init')
  }
}
</script>
