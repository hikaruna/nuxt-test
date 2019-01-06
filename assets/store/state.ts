import wait from "~/assets/wait";

export default class State {
  public readonly counter: number;

  constructor(counter: number) {
    this.counter = counter;
  }

  public incremented(): State {
    return new State(this.counter + 1);
  }

  public async incrementedAsync(): Promise<State> {
    await wait(1000);
    return this.incremented();
  }
}
