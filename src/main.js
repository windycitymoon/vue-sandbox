import Vue from 'vue'
import App from './App.vue'
import Quote from './Quote.vue'
import Videos from './Videos.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

new Vue({
  el: '#quote',
  render: x => x(Quote)
})

new Vue({
  el: '#videos',
  render: x => x(Videos)
})
