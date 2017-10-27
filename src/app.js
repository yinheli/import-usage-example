import Vue from 'vue'
import router from './router'
import App from './components/app.vue'

Vue.config.productionTip = (process.env.NODE_ENV !== 'production')

setTimeout(()=> {
    new Vue({
        router,
        render: h => h(App)
    }).$mount('#app')
}, 1000)
