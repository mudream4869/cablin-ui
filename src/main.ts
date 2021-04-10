import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'

import VueHighlightJS from 'vue-highlight.js'

import yaml from 'highlight.js/lib/languages/yaml'

import 'highlight.js/styles/default.css';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueHighlightJS, {
	languages: {
    yaml,
  },
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
