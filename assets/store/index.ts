import State from "./state";

export default class Store {
  private state: State;

  constructor({counter}: {counter: number}) {
    this.state = new State(counter);
  }

  get counter(): number {
    return this.state.counter;
  }

  public increment(): void {
    this.state = this.state.incremented();
  }

  public async incrementAsync(): Promise<void> {
    this.state = await this.state.incrementedAsync();
  }
}
