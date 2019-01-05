import Vue from "vue";

export default Vue.extend({
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
})
