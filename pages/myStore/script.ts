import { Component, Vue } from "nuxt-property-decorator";
import Store from "~/assets/store/index";

@Component
export default class extends Vue {
  private store = new Store({counter: 0});

  get counter(): number {
    return this.store.counter;
  }

  public increment(): void {
    this.store.increment();
  }

  public async incrementAsync(): Promise<void> {
    await this.store.incrementAsync();
  }
}
