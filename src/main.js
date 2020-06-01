import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vSelect from 'vue-select'
import heatmapjsVue from 'heatmapjs-vue'
import VueNativeSock from 'vue-native-websocket'
import axios from 'axios'
import VueAxios from 'vue-axios'


import('heatmapjs-vue/dist/heatmapjs-vue.min.css')


Vue.use(VueNativeSock, 'wss://api.happypoint.works/heatmap/data', {
    store: store,
    connectManually: true,
})

Vue.use(heatmapjsVue)
Vue.use(VueAxios, axios)


Vue.component('v-select', vSelect)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
