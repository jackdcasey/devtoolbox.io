<template>
  <div id="app">
    <Sidebar id="sidebar"/>
    <router-view id="viewer"/>
  </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
  #viewer {
    background-color: lightcoral;
    margin-left: 300px
  }
  html, body, #app, #viewer{
    height: 100%;
  }
</style>
