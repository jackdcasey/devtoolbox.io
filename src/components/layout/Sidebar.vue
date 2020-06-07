<template>
    <div>
        <router-link to="/" class="plainlink">
            <h1>devtoolbox.io</h1>
        </router-link>
        <div id="links">
            <b-list-group>
            <b-list-group-item to="/tool1">Tool1</b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style scoped>

h1 {
    margin-top: 5px;
    margin-bottom: 5px;

    text-align: center;
}

.plainlink {
    text-decoration: none;
    color: black;
}

</style>