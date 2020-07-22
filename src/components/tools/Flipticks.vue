<template>
  <b-container class="flex-container">
  <b-row class="justify-content-md-center">
    <b-col md="auto">
        <div id="title">
            <h1>Flip Ticks</h1>
            <h3>Convert ISO8601 timestamps to ticks, and vice versa</h3>
        </div>

        <div id="tooloutput" class="m-2">
            <b-card class="m-2" title="ISO8601">
                <OneLineWithCopyAndTransform :text=placeholder />
            </b-card>
        </div>
    </b-col>
  </b-row>

  </b-container>
</template>

<script>

import OneLineWithCopyAndTransform from '../utility/OneLineWithCopyAndTransform'

export default {
  name: 'Timenow',
  components: {
    OneLineWithCopyAndTransform
  },
  data: function () {
    return {
      placeholder: 'placeholder'
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
