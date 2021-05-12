import Vue from 'vue'
import App from './App.vue'

import vueToastPanel from '../packages/index'

Vue.config.productionTip = false

Vue.use(vueToastPanel)

new Vue({
  render: h => h(App),
}).$mount('#app')
