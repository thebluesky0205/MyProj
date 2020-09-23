<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                flat
              >
                <v-toolbar-title class="font-weight-bold">Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="userid"
                    label="Id"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    color="grey darken-3"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    color="grey darken-3"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn align="right" @click="start('first')" class="blue-grey lighten-4 font-weight-bold">뒤로가기</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="submit" class="blue-grey lighten-4 font-weight-bold">로그인</v-btn>
<!--                <v-btn @click="start('signup')" class="blue-grey lighten-4 font-weight-bold">회원가입</v-btn>-->
              </v-card-actions>
            </v-card><br>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LogInForm',
  data () {
    return {
      userid: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    start (page) {
      this.$store.dispatch('mvPage', page)
    },
    submit () {
      console.log('logInPage onSubmit()')
      this.login(this).then(res => {
        this.$store.dispatch('mvPage', 'main')
        alert('로그인.')
      }).catch(err => {
        // alert(err.response.data.message)
        alert('로그인에 실패하였습니다.', err)
      })
    },
    computed: {
      ...mapState(['myname'])
    }
  }
}
</script>
