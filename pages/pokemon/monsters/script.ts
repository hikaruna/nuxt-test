import { Component, Vue } from "nuxt-property-decorator";
import pocketMonsters from "~/assets/pocketMonsters.json";

@Component
export default class extends Vue {
  public readonly pocketMonsters = pocketMonsters;

  getId(m: Monster): string {
    return `${m.no}-${m.name}`;
  }
}
