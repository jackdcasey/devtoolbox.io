<template>
  <div id="app">
    <b-container fluid class="height100">
      <b-row class="height100">
        <div id="sidebar" class="shadow-lg">
          <Sidebar/>
        </div>
        <b-col id="viewer">
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
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

#sidebar {
  width: 280px;
}

#app {
  max-height: 100vh;
  overflow: hidden;
}

html, body, #app, .height100{
  height: 100vh;
}

</style>
