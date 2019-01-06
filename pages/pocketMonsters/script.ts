import { Component, Vue } from "nuxt-property-decorator";
import pocketMonsters from "~/assets/pocketMonsters.json";

@Component
export default class extends Vue {
  public readonly pocketMonsters = pocketMonsters;
}
