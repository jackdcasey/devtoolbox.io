<template>
    <div>
        <b-input-group>
            <b-form-input readonly type="text" v-model="text" class="output"></b-form-input>
            <b-input-group-append>
            <b-button :variant=buttonvariant @click="convert"> {{buttontext}} </b-button>
            <b-button :variant=buttonvariant @click="copy"> {{buttontext}} </b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
export default {
  name: 'OneLineWithCopyAndTransform',
  props: ['text'],
  data: function () {
    return {
      buttontext: '',
      buttonvariant: ''
    }
  },
  beforeMount: function () {
    this.initButton()
  },
  methods: {
    copy () {
      this.copyStringToClipboard(this.text)
      this.buttontext = 'Copied!'
      this.buttonvariant = 'outline-success'

      setTimeout(this.initButton, 2000)
    },
    initButton () {
      this.buttontext = 'Copy!'
      this.buttonvariant = 'outline-primary'
    },
    copyStringToClipboard (str) {
      console.log('Copying to clipboard: ' + str)
      var el = document.createElement('textarea')
      el.value = str
      el.setAttribute('readonly', '')
      el.style = {position: 'absolute', left: '-9999px'}
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }
}
</script>

<style scoped>

.output {
    font-family:'Courier New', Courier, monospace;
    font-weight: bold;
    background-color: #ffffff;
}

</style>
