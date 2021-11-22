<template>
  <div>
    <Flag text="更多"/>
  </div>
</template>

<script>
import Flag from './components/Flag'

export default {
  name: 'App',
  components: {
    Flag
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
