import Vue from 'vue'
import App from './App.vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

/*
 |--------------------------------------------------------------------------
 | Initialize UIkit Icons
 |--------------------------------------------------------------------------
 */
UIkit.use(Icons)

/*
 |--------------------------------------------------------------------------
 | Starting up the app
 |--------------------------------------------------------------------------
 */
new Vue({
    el: '#app',
    render: h => h(App)
})
