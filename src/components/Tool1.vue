<template>
  <b-container class="flex-container">
  <b-row class="justify-content-md-center">
    <b-col md="auto">
        <h1>Tool 1</h1>
        <h2>This is the first tool</h2>
    </b-col>
  </b-row>

  </b-container>
</template>

<script>
export default {
  name: 'Tool1'
}
</script>

<style scoped>

h1, h2 {
    text-align: center;
}

.flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

</style>