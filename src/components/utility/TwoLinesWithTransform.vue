<template>
    <div>
      <OneLineWithCopy class="m-2" :text=secondline />
      <OneLineWithCopy class="m-2" :text=secondline />
  </div>
</template>

<script>
import OneLineWithCopy from './OneLineWithCopy'

export default {
  name: 'TwoLinesWithTransform',
  props: ['text'],
  components: {
    OneLineWithCopy
  },
  data: function () {
    return {
      buttontext: '',
      buttonfunctext: '',
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
      this.buttonfunctext = 'Convert!'
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
