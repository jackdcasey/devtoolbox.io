<template>
  <b-container class="flex-container">
  <b-row class="justify-content-md-center">
    <b-col md="auto">
        <div id="title">
            <h1>Time Now</h1>
            <h3>Current time in multiple formats</h3>
        </div>

        <div id="tooloutput" class="m-2">
            <b-card class="m-2" title="ISO8601">
                <b-input-group>
                    <b-form-input id="isotime_input" readonly type="text" v-model="isotime" class="mono"></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-primary" @click="copytime('iso8601')">Copy!</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-card>
            <b-card class="m-2" title="Ticks">
                <b-input-group>
                    <b-form-input id="tickstime_input" readonly type="text" v-model="tickstime" class="mono"></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-primary" @click="copytime('ticks')">Copy!</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-card>
            <b-card class="m-2" title="Unix">
                <b-input-group>
                    <b-form-input id="unixtime_input" readonly type="text" v-model="unixtime" class="mono"></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-primary" @click="copytime('unix')">Copy!</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-card>
        </div>
    </b-col>
  </b-row>

  </b-container>
</template>

<script>
export default {
  name: 'Timenow',
  data: function () {
    return {
        isotime: "",
        tickstime: "",
        unixtime: "",
        timer: '',
        }
    },
    created () {
        this.timer = setInterval(this.updatetime, 20)
    },
    methods: {
        updatetime() {
            var currentTime = new Date();
            this.isotime = currentTime.toISOString();
            this.tickstime = (currentTime.getTime() * 10000) + 621355968000000000 + Math.floor(Math.random() * 10000);
            this.unixtime = Math.floor(new Date().getTime() / 1000);
        },
        copytime(format) {
            switch(format) {
                case "iso8601":
                    this.copyStringToClipboard(this.isotime);
                    break;
                case "ticks":
                    this.copyStringToClipboard(this.tickstime);
                    break;
                case "unix":
                    this.copyStringToClipboard(this.unixtime);
                    break;
            }
        },
        copyStringToClipboard(str) {
            console.log("Copying to clipboard: " + str)
            var el = document.createElement('textarea');
            el.value = str;
            el.setAttribute('readonly', '');
            el.style = {position: 'absolute', left: '-9999px'};
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
}
</script>

<style scoped>

#title {
    text-align: center;
    margin-bottom: 50px;
}

#tooloutput {
    width: 400px;
    margin-top: 100px;
    border: 2px solid rgba(0,0,0,.1);
    border-radius: 10px;
}

.mono {
    font-family:'Courier New', Courier, monospace;
    font-weight: bold;
    background-color: #ffffff;
}

.flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

</style>