<template>
  <v-main>
    <v-container>
      <v-table>
        <t-head>
          <div class="mainPageMenu" align="left">
            <v-btn class="font-weight-bold" href="https://github.com/thebluesky0205" target="_blank"
                   style="background-color: #ffffff">| Github |</v-btn>
            <v-btn class="font-weight-bold" href="https://www.instagram.com/have_fun_0205_" target="_blank"
                   style="background-color: #ffffff">| Instagram |</v-btn>
            <v-btn class="font-weight-bold" href="https://www.google.com/" target="_blank"
                   style="background-color: #ffffff">| Google |</v-btn>
            <v-btn class="font-weight-bold" @click="logout"
                   style="background-color: #ffffff">| Logout |</v-btn>
          </div><hr>
        </t-head>
        <t-body>
          <!--        <v-img lazy-src="@/assets/MainImg2.png" width="1800" height="950"></v-img>-->
<!--          <v-img lazy-src="@/assets/MainImg.png" width="2000" height="725"></v-img><hr>-->
          <v-img src="@/assets/out.png" width="1000" height="750"></v-img>
        </t-body>
      </v-table>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MainPage',
  data: function () {
    return {}
  },
  methods: {
    onClickLogout () {
      this.logout()
      alert('로그아웃 되었습니다.')
    },
    ...mapActions(['logout']),
    start (page) {
      this.$store.dispatch('mvPage', page)
    }
  }
}
</script>

<style>
</style>
