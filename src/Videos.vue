<template lang="html">
  <div id="videos">
    <p>{{ initial }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'videos',
  data () {
    return {
      initial: 'Videos Loading....'
    }
  },
  created () {
    axios.get('src/assets/recommendations.json')
      .then( response => {
        console.log(response);
        this.inital = response.data.[i].title
        // TODO: Iterate over this response object inside the template above
      })
      .catch( error => {
        console.log(error);
      })
  }
}
</script>

<style lang="scss">
</style>
