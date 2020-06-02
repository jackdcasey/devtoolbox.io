<template>
  <div>
    <b-sidebar visible no-header width=300px>
        <h1>devtoolbox.io</h1>
        <div>
            <b-nav vertical class="w-25">
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
        </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style>

</style>