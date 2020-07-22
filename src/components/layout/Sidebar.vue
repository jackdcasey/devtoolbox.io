<template>
    <div id="sidebar">
        <router-link to="/" class="plainlink">
            <h1>devtoolbox.io</h1>
        </router-link>
        <div id="links">
            <b-card class="m-2" header="Time & Date">
                <b-list-group>
                <b-list-group-item to="/timenow">Time Now</b-list-group-item>
                <b-list-group-item to="/flipticks">Flip Ticks</b-list-group-item>
                </b-list-group>
            </b-card>
            <b-card class="m-2" header="Windows">
                <b-list-group>
                <b-list-group-item to="/placeholder">Placeholder</b-list-group-item>
                <b-list-group-item to="/placeholder">Placeholder</b-list-group-item>
                <b-list-group-item to="/placeholder">Placeholder</b-list-group-item>
                <b-list-group-item to="/placeholder">Placeholder</b-list-group-item>
                </b-list-group>
            </b-card>

            <b-card class="m-2" header="Linux">
                <b-list-group>
                <b-list-group-item to="/placeholder">Placeholder</b-list-group-item>
                <b-list-group-item to="/placeholder">Placeholder</b-list-group-item>
                </b-list-group>
            </b-card>
            <b-card class="m-2" header="Networking">
                <b-list-group>
                <b-list-group-item to="/placeholder">Placeholder</b-list-group-item>
                <b-list-group-item to="/placeholder">Placeholder</b-list-group-item>
                </b-list-group>
            </b-card>

        </div>
        <div id="buttondiv">
            <a class="github-button" href="https://github.com/jackdcasey/devtoolbox.io" data-size="large" aria-label="Star jackdcasey/devtoolbox.io on GitHub">Contributors & Suggestions Welcome!</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  mounted () {
    let githubButtonScript = document.createElement('script')
    githubButtonScript.setAttribute('src', 'https://buttons.github.io/buttons.js')
    document.head.appendChild(githubButtonScript)
  }
}
</script>

<style scoped>

h1 {
    padding-top: 5px;
    padding-bottom: 5px;

    text-align: center;
}

#links {
    overflow-y: scroll;
    overflow-x: hidden;

    max-height: 85vh;
    box-sizing:border-box;

    margin-top: 5px;
    margin-bottom: 5px;

    border-top: 2px solid rgba(0,0,0,.1);
    border-bottom: 2px solid rgba(0,0,0,.1);
}

#sidebar {
    height: 100vh;
    max-height: 100vh;
    background-color: #a8dadc;

    box-shadow: 10px;
    border-right: 2px solid rgba(0,0,0,.1);
}

#buttondiv {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

.plainlink {
    text-decoration: none;
    color: black;
}

</style>
