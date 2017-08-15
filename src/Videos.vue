<template lang="html">
  <div id="videos">
      <div v-for="item in items" :key="item.id">
        <p v-if="item.title">
          <h3>{{ item.title }}</h3>
          <a :href="'http://youtube.com' + item.url" class="href">View Video</a> <br>
          <p>{{ item.views }}</p>
        </p>
      </div>

  </div>

  <!-- <iframe width="560" height="315" :src="'http://youtube.com/embed' + item.url" frameborder="0" allowfullscreen></iframe><br/> -->

</template>

<script>
import axios from 'axios'
export default {
  name: 'videos',
  data () {
    return {
      initial: 'Videos Loading....',
      items: []
    }
  },
  created () {
    axios.get('src/assets/recommendations.json')
      .then( response => {

        this.items = response.data;
      })
      .catch( error => {
        console.log(error);
      })
  }
}
</script>

<style lang="scss">
</style>
