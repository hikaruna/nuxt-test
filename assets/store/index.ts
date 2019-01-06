import wait from '~/assets/wait'

export default class Store {
  private state: State

  constructor({counter}: {counter: number}) {
    this.state = new State(counter);
  }

  get counter(): number {
    return this.state.counter;
  }

  increment(): void {
    this.state = this.state.incremented();
  }

  async incrementAsync(): Promise<void> {
    this.state = await this.state.incrementedAsync();
  }
}

class State {
  public readonly counter: number

  constructor(counter: number) {
    this.counter = counter;
  }

  incremented(): State {
    return new State(this.counter + 1);
  }

  async incrementedAsync(): Promise<State> {
    await wait(1000);
    return this.incremented();
  }
}
