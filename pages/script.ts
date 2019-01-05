import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class extends Vue {
  message = "world"
  get counter() {
    return this.$store.state.counter;
  }

  increment() {
    this.$store.commit('increment');
  }
}
