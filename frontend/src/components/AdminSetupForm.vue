<template>
  <v-app id="inspire">
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
            <v-card class="elevation-12">
              <v-toolbar
                flat
              >
                <v-toolbar-title class="font-weight-bold">계정 생성</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="userId"
                    label="Id"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    color="grey darken-3"
                  ></v-text-field>

                  <v-text-field
                    v-model="userPw"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    color="grey darken-3"
                  ></v-text-field>

                  <v-text-field
                    v-model="userName"
                    label="Name"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    color="grey darken-3"
                  ></v-text-field>

                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn align="right" @click="start('first')" class="blue-grey lighten-4 font-weight-bold">뒤로가기</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="submit" class="blue-grey lighten-4 font-weight-bold">계정 생성</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminSetupForm',
  data () {
    return {
      userId: '',
      userName: '',
      userPw: ''
    }
  },
  methods: {
    submit () {
      console.log('this: ' + this.userId +
                  ', ' + this.userName +
                  ', ' + this.userPw)
      const { userId, userName, userPw } = this
      axios.post('http://localhost:7777/users/setup',
        { userId, userName, userPw })
        .then(res => {
          alert('관리자 계정이 생성되었습니다.')
          this.$store.dispatch('mvPage', 'first')
        })
        .catch(err => {
          alert(err.response.data)
        })
    },
    start (page) {
      this.$store.dispatch('mvPage', page)
    }
  }
}
</script>
