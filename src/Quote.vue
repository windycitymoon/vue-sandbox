<template>
  <div id="quote">
    <h2>Advice of the day</h2>
    <p>{{advice}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'quote',
  data () {
    return {
      advice: 'loading...'
    }
  },
  created () {
    axios.get('http://api.adviceslip.com/advice')
      .then(response => {
        this.advice = response.data.slip.advice
      })
      .catch(error => {
        this.advice = 'There was an error: ' + error.message
      })
  }
}
</script>

<style lang="scss">
#quote {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
