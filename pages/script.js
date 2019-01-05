export default {
  data: () => ({
    message: "hello world"
  }),
  computed: {
    counter() { return this.$store.state.counter }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
