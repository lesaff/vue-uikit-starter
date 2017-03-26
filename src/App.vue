<template>
    <div id="app">
        <navbar></navbar>

        <a href="https://vuejs.org/">
            <img src="./assets/img/vue-logo.png" title="Vue.js documentation" uk-tooltip="pos: bottom">
        </a>
        <a href="https://getuikit.com/">
            <img src="./assets/img/uikit-logo.png" title="UIkit documentation" uk-tooltip="pos: bottom">
        </a>

        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <a href="https://github.com/askaoru/vue-uikit-starter" uk-icon="icon: github; ratio: 2"></a>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    name: 'app',

    components: { Navbar },

    data () {
        return {
            title: 'Welcome to Your Vue.js and UIkit App',
            message: 'A basic starter app for vue.js and uikit powered by webpack via laravel mix.'
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>