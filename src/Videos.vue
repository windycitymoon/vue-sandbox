<template lang="html">
  <div id="videos">
      <div v-for="item in items" :key="item.id" class="">
        <p v-if="item.title">
          <h3>{{ item.title }}</h3>
          <a :href="'http://youtube.com' + item.url" target="_blank">View Video</a><br>
          <p>{{ item.views }}</p>
        </p>
        <button type="button" name="button">Open Video</button>
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
