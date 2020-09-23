<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      class="elevation-0"
      color="grey darken-3"
      dark
    >
      <v-toolbar-title><div @click="home" class="white--text font-weight-bold">{{ myname.userName }} 'S BLOG</div></v-toolbar-title>
      <v-spacer></v-spacer>
      <slot align="" name="menubar"></slot>
      <v-spacer></v-spacer>
      <v-row
        align="center"
        style="max-width: 450px"
      >
        <v-text-field
          v-model="searchMessage"
          :append-icon-cb="() => {}"
          placeholder="빠른 메모 검색하기"
          single-line
          append-icon="mdi-magnify"
          color="white"
          v-on:keyup.enter="searchList"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>

    <div v-if="pageState === 'main'">
      <main-page-form>
      </main-page-form>
    </div>
    <div v-else-if="pageState === 'weather'">
      <weather-page-form>
      </weather-page-form>
    </div>
    <div v-else-if="pageState === 'memo'">
      <create-memo-page-form>
      </create-memo-page-form>
      <memo-list-page>
      </memo-list-page>
    </div>
    <div v-else-if="pageState === 'storage'">
      <memo-page-form>
      </memo-page-form>
    </div>
    <div v-else-if="pageState === 'readStorage'">
      <read-review-page-form>
      </read-review-page-form>
    </div>
    <div v-else-if="pageState === 'modifyStorage'">
      <modify-memo-page-form>
      </modify-memo-page-form>
    </div>
    <div v-else>
      <main-page-form>
      </main-page-form>
    </div>
    <v-footer
      app
      color="grey darken-3"
      class="white--text"
    >
      <v-spacer></v-spacer>
      <span class="font-weight-bold white--text">{{ myname.userName }} 'S ON</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainPageForm from '@/components/MainPageForm.vue'
import WeatherPageForm from '@/components/WeatherPageForm'
import MemoPageForm from '@/components/MemoPageForm.vue'
import ReadReviewPageForm from '@/components/ReadMemoPageForm.vue'
import ModifyMemoPageForm from '@/components/ModifyMemoPageForm.vue'
import { mapState, mapActions } from 'vuex'
import CreateMemoPageForm from '@/components/CreateMemoPageForm'
import MemoListPage from '@/components/MemoListPage'

export default {
  components: {
    MainPageForm,
    MemoListPage,
    MemoPageForm,
    WeatherPageForm,
    ReadReviewPageForm,
    CreateMemoPageForm,
    ModifyMemoPageForm
  },
  data: () => ({
    drawer: false,
    left: false,
    searchMessage: ''
  }),
  methods: {
    ...mapActions(['logout']),
    home () {
      this.$store.dispatch('mvPage', 'main')
    },
    logoutpage () {
      this.logout()
      alert(this.myname.userName + '님 로그아웃 되었습니다.')
    },
    searchList () {
      const userNo = this.myname.userNo
      const searchMessage = this.searchMessage
      this.$store.dispatch('searchReview', { userNo, searchMessage })
      this.$store.dispatch('mvPage', 'storage')
    }
  },
  computed: {
    ...mapState(['myname', 'pageState', 'myinfo'])
  }
}
</script>
