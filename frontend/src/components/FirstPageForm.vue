<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      color="grey darken-3"
      dark
    >
    </v-app-bar>

    <div v-if="pageState === 'first'" style="margin-top: 50px">
      <v-main>
        <v-container>
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <v-sheet
                elevation="12"
                class="pa-12"
                width="400"
              >
                <v-btn @click="start('login')" class="blue-grey lighten-4 font-weight-bold">
                  로그인 하기
                </v-btn><br><br>
                <v-btn @click="start('admin')" class="blue-grey lighten-4 font-weight-bold">
                  계정 만들기
                </v-btn><br>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </div>

      <div v-if="pageState === 'login'">
        <log-in-form>
        </log-in-form>
      </div>

      <div v-if="pageState === 'admin'">
        <admin-setup-form>
        </admin-setup-form>
      </div>

    <v-footer
      app
      color="grey darken-3"
      class="white--text"
    >
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import LogInForm from '@/components/LogInForm.vue'
import AdminSetupForm from '@/components/AdminSetupForm.vue'
import { mapState } from 'vuex'

export default {
  components: {
    LogInForm,
    AdminSetupForm
  },
  computed: {
    ...mapState(['pageState'])
  },
  methods: {
    start (page) {
      this.$store.dispatch('mvPage', page)
    }
  }
}
</script>
