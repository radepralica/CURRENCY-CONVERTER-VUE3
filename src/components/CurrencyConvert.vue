<template>
  <div class="container">
    <br /><br /><br />

    <br /><br />
    <label
      >1 <span style="color: green">{{ codesOne }} = </span> {{ rate }}
      <span style="color: red">{{ codesTwo }}</span></label
    >

    <form>
      <div class="container div-shad">
        <div class="row">
          <div class="col-6">
            <select
              class="form-select form-select-lg mb-3 sel-from"
              name=""
              id=""
              v-model="codesOne"
              @change="fetchData"
              @click="clearValues"
            >
              <option value="BAM">BAM</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RSD">RSD</option>
              <option value="HRK">HRK</option>
              <option value="AED">AED</option>
              <option value="ARS">ARS</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="BSD">BSD</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="COP">COP</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="DOP">DOP</option>
              <option value="EGP">EGP</option>
              <option value="FJD">FJD</option>
              <option value="GBP">GBP</option>
              <option value="GTQ">GTQ</option>
              <option value="HKD">HKD</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="KZT">KZT</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PAB">PAB</option>
              <option value="PEN">PEN</option>
              <option value="PHP">PHP</option>
              <option value="PKR">PKR</option>
              <option value="PLN">PLN</option>
              <option value="PYG">PYG</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SAR">SAR</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
              <option value="UAH">UAH</option>
              <option value="UYU">UYU</option>
              <option value="VND">VND</option>
              <option value="ZAR">ZAR</option>
            </select>
            <button
              @click.prevent="switchCodes"
              type="button"
              class="btn btn-danger"
            >
              Switch
            </button>
            <select
              class="form-select form-select-lg mb-3 sel-to"
              name=""
              id=""
              v-model="codesTwo"
              @change="fetchData"
              @click="clearValues"
            >
              <option value="BAM">BAM</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RSD">RSD</option>
              <option value="HRK">HRK</option>
              <option value="AED">AED</option>
              <option value="ARS">ARS</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="BSD">BSD</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="COP">COP</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="DOP">DOP</option>
              <option value="EGP">EGP</option>
              <option value="FJD">FJD</option>
              <option value="GBP">GBP</option>
              <option value="GTQ">GTQ</option>
              <option value="HKD">HKD</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="KZT">KZT</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PAB">PAB</option>
              <option value="PEN">PEN</option>
              <option value="PHP">PHP</option>
              <option value="PKR">PKR</option>
              <option value="PLN">PLN</option>
              <option value="PYG">PYG</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SAR">SAR</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
              <option value="UAH">UAH</option>
              <option value="UYU">UYU</option>
              <option value="VND">VND</option>
              <option value="ZAR">ZAR</option>
            </select>
          </div>
          <div class="col-6">
            <input
              class="form-control inp-one"
              type="number"
              v-model="amountOne"
              min="0"
              step="5"
            />
            <br /><br /><br /><br />
            <!-- <input
              class="form-control inp-two"
              type="number"
              v-model="amountTwo"
               min=0
              step=5
              @input="fetchData"
            /> -->
            <label for=""
              >{{ result }}
              <span style="color: red">{{ codesTwo }}</span></label
            >
          </div>
        </div>
        <div class="col-12">
          <button @click.prevent="fetchingData" class="btn btn-primary but">
            Izračunaj
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      codesOne: 'USD',
      codesTwo: 'EUR',
      amountOne: '0',
      //amountTwo: '0',
      result: '',
      rate: '',
    };
  },

  methods: {
    fetchData() {
      fetch(
        `https://v6.exchangerate-api.com/v6/446526e8760ae80b2ea33475/latest/${this.codesOne}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          this.rate = data.conversion_rates[this.codesTwo];
          //this.amountTwo = (this.amountOne * this.rate).toFixed(2);
        });
    },
    switchCodes() {
      const temp = this.codesOne;
      this.codesOne = this.codesTwo;
      this.codesTwo = temp;
      this.amountOne = '0';
      this.result = '0.00';

      this.fetchingData();

      console.log(this.data.conversion_rates);
    },
    fetchingData() {
      this.result = (this.amountOne * this.rate).toFixed(2);
      //this.fetchData();
    },
    clearValues() {
      this.amountOne = '0';
      this.result = '0.00';
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
button {
  margin: 1em 0 1em 0;
}
.bshad {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.sel-from {
  margin-top: -1em;
}
.div-shad {
  padding-top: 3em;
  height: 18em;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 7em;
}
select {
  width: 10em;
}
.form-control {
  width: em;
}
.cont {
  width: 12em;
  color: red;
}
.sel-to {
  margin-bottom: 3em;
}
button {
  margin-left: 12em;
}
.inp-one {
  margin-top: -1em;
}
.inp-two {
  margin-bottom: -2em;
}

label {
  font-size: 2em;
}
.but {
  margin-left: -1em;
}

h4 {
  padding-top: 1.2em;
  text-align: justify;
}
</style>
