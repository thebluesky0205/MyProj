<template>
  <div class="home">
    <div id="header" align="center" v-if="!isAuthorized">
      <first-page-form></first-page-form>
    </div>
    <div id="header" align="center" v-else>
      <Layout>
        <template #menubar>
          <div style="margin-right: 1200px ">
            <v-bottom-navigation
              shift
              class="grey darken-3 elevation-0"
              width="50"
            >
              <v-btn @click="start('Home')" text color="white" class="font-weight-bold"
                    style="padding: 10px; width: 120px; font-size: 18px"><span>...</span>로비</v-btn>
              <v-btn @click="start('weather')" text color="white" class="font-weight-bold"
                     style="padding: 10px; width: 120px; font-size: 18px"><span>...</span>날씨</v-btn>
              <v-btn @click="start('memo')" text color="white"  class="font-weight-bold"
                     style="padding: 10px; width: 120px; font-size: 18px" ><span>...</span>메모</v-btn>
            </v-bottom-navigation>
          </div>
        </template>
      </Layout>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Layout from '../components/Layout'
import FirstPageForm from '../components/FirstPageForm.vue'

/* eslint-disable no-unused-vars */

export default {
  components: {
    Layout,
    FirstPageForm
  },
  name: 'Home',
  data: function () {
    return {
    }
  },
  methods: {
    onClickLogout () {
      this.logout()
      alert('로그아웃.')
    },
    ...mapActions(['logout']),
    start (page) {
      this.$store.dispatch('mvPage', page)
    }
  },
  computed: {
    ...mapState(['myinfo', 'myname', 'pageState']),
    ...mapGetters(['isAuthorized'])
  }
}
</script>
