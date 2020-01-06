import Vue from 'vue';

import './style/common.scss'

import utils from './utils/utils'
import app from './App.vue'
import router from './router/index.js'
// Vue.use(axios);
Vue.prototype.$utils = utils;


new Vue({
    el: '#app',
    data: {
        msg: '1234'
    },
    render: c => c(app),
    // 将路由对象挂载到vm上
    router: router
})
