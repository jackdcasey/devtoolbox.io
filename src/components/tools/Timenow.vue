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
                <OneLineWithCopy :text=isotime />
            </b-card>
            <b-card class="m-2" title="Ticks">
                <OneLineWithCopy :text=tickstime />
            </b-card>
            <b-card class="m-2" title="Unix">
                <OneLineWithCopy :text=unixtime />
            </b-card>
        </div>
    </b-col>
  </b-row>

  </b-container>
</template>

<script>

import OneLineWithCopy from '../utility/OneLineWithCopy'

export default {
  name: 'Timenow',
  components: {
    OneLineWithCopy
  },
  data: function () {
    return {
      isotime: '',
      tickstime: '',
      unixtime: '',
      timer: ''
    }
  },
  created () {
    this.timer = setInterval(this.updatetime, 20)
  },
  methods: {
    updatetime () {
      var currentTime = new Date()
      this.isotime = currentTime.toISOString()
      this.tickstime = (currentTime.getTime() * 10000) + 621355968000000000 + Math.floor(Math.random() * 10000)
      this.unixtime = Math.floor(new Date().getTime() / 1000)
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
