<template>
  <div id="app">
    <b-container fluid class="height100">
      <b-row class="height100">
        <div id="sidebar">
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
  width: 300px;
  background: lightcoral;
  text-align: center;
}

#viewer {
  background-color: lightblue;
  text-align: center;
}

html, body, #app, .height100{
  height: 100%;
}

</style>
