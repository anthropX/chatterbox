<template>
  <main class="join flex flex-col justify-between flex-grow">
    <Field v-model="name" label="Name" type="text"></Field>
    <Button class="join" @click="join"
      >Join {{ name ? 'as ' + name : 'anonymously' }}</Button
    >
  </main>
</template>

<script>
import setUpSocket from '~/services/SocketService'

export default {
  layout: 'default',
  data() {
    return {
      name: '',
    }
  },
  methods: {
    setName() {
      this.$store.dispatch('setName', this.name)
    },
    async join() {
      await setUpSocket()
      // this.$store.dispatch('setSocket', socket)
      this.$router.push({ path: this.localePath('chat') })
    },
  },
}
</script>

<style scoped lang="scss">
</style>
