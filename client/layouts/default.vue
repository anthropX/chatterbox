<template>
  <div class="default-layout flex flex-col">
    <Header></Header>
    <Nuxt />
  </div>
</template>
<script>
// import storeMixin from '~/mixins/storeMixin'
import $store from '~/services/StoreService'

export default {
  created() {
    $store(this.$store);
  }
}
</script>

<style scoped>
.default-layout {
  padding: 1rem;
  background: black;
  color: white;
  height: 100vh;
}
</style>>
