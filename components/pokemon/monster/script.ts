import { Component, Vue, Prop } from "nuxt-property-decorator";
import monsters from "~/assets/pocketMonsters.json";

@Component
export default class extends Vue {
  @Prop(String) id!: string;

  get name() { return this.monster.name; }

  private monster!: Monster;

  created() {
    const m = monsters.find((i) => `${i.no}-${i.name}` === this.$route.params.id);
    if (!m) { throw "error"; }
    this.monster = m
  }
}
