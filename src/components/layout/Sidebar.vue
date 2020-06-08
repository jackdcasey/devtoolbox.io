<template>
    <div id="sidebar">
        <router-link to="/" class="plainlink">
            <h1>devtoolbox.io</h1>
        </router-link>
        <div id="links">
            <b-card class="m-1" header="Group 1">
                <b-list-group>
                <b-list-group-item to="/tool1">Tool1</b-list-group-item>
                <b-list-group-item to="/tool2">Tool2</b-list-group-item>
                </b-list-group>
            </b-card>
            <b-card class="m-1" header="Group 2">
                <b-list-group>
                <b-list-group-item to="/tool1">Tool1</b-list-group-item>
                <b-list-group-item to="/tool2">Tool2</b-list-group-item>
                </b-list-group>
            </b-card>
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

#links {
    overflow: scroll;

    max-height: 90vh;
    box-sizing:border-box;
}

#sidebar {
    max-height: 100vh;
}

.plainlink {
    text-decoration: none;
    color: black;
}

</style>