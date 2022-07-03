<template>
  <div>
    <the-header>
      <div>
        <h1>Currency Converter</h1>
        <br /><br /><br />
      </div>
    </the-header>
  </div>
  <div class="container-fluid">
    <currency-convert> </currency-convert>
  </div>
  <div class="container-fluid">
    <br />

    <the-footer>
      <template #footer>
        <div class="container-fluid lastly">
          <h4 class="h4">
            Lastly Updated:
            <span style="color: green">{{ data.time_last_update_utc }}</span>
          </h4>
        </div>
      </template>
    </the-footer>
  </div>
</template>

<script>
import CurrencyConvert from './components/CurrencyConvert.vue';

export default {
  components: {
    CurrencyConvert,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    fetchedData() {
      fetch(
        `https://v6.exchangerate-api.com/v6/https://v6.exchangerate-api.com/v6/11656c6fa8f018b5d69fcebe/latest/USD`
      )
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
        });
    },
  },
  mounted() {
    this.fetchedData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#axx {
  width: 15em;
  margin-left: 19em;
  margin-top: -2em;
}
label {
  font-size: 1.3em;
  color: aqua;
  margin-left: 0em;
}
h4 {
  padding-top: 1em;
}
</style>
