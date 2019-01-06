import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  public message = "world";

  get counter() {
    return this.$store.state.counter;
  }

  public increment() {
    this.$store.commit("increment");
  }

  public incrementAsync() {
    return this.$store.dispatch("incrementAsync");
  }
}
