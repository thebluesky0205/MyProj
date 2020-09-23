<template>
  <v-content>
    <v-container>
      <v-table>
        <div>
          <section class="weather" style="margin-top: auto" >
            <h2>서울특별시 종로2가</h2>
            <vue-weather
              api-key="45aee2ef715cfa91ed7957e8cfd37a70"
              units="uk"
              :latitude="lat"
              :longitude="long"
              language="en"
            /><br>
            <h2>서울특별시 노량진</h2>
            <vue-weather
              api-key="45aee2ef715cfa91ed7957e8cfd37a70"
              units="uk"
              :latitude="lat3"
              :longitude="long3"
              language="en"
            /><br>
            <h2>인천광역시 중구</h2>
            <vue-weather
              api-key="45aee2ef715cfa91ed7957e8cfd37a70"
              units="uk"
              :latitude="lat2"
              :longitude="long2"
              language="en"
            /><br>
            <!-- en / us -->
          </section>
        </div>
      </v-table>
    </v-container>
  </v-content>
</template>

<script>
import VueWeather from 'vue-weather-widget'
export default {
  name: 'WeatherPageForm',
  components: {
    VueWeather
  },
  data: () => ({
    lat: '37.5705570',
    long: '126.985298',
    lat2: '37.4931776',
    long2: '126.567750',
    lat3: '37.5133948',
    long3: '126.945676',
    lat4: '',
    long4: ''
  })
}
</script>

<style>
.weather {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  height: 95vh;
}
h1 {
  color: #022a2a;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
}
</style>
