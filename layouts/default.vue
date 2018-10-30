<template>
  <div id="main-wrapper">
    <div id="one">
      <Header />
    </div>
    <div id="two">
      <Nav/>
      <nuxt/>
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'

export default {
  components: {
    Header,
    Nav
  }
  
}
</script>

<style lang="scss">

</style>

