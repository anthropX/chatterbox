import $store from '~/services/StoreService'

export default {
  created() {
    $store(this.$store)
  },
}
