import { Component, Vue } from "nuxt-property-decorator";
import { Route } from "vue-router";
import pocketMonsters from "~/assets/pocketMonsters.json";
import monster from "~/components/pokemon/monster/index";

@Component({
  components: {
    monster
  }
})
export default class extends Vue {
  get name() { return this.monster.name; }
  get no() { return this.monster.no; }
  get id() { return `${this.monster.no}-${this.monster.name}`; }

  private monster!: Monster;

  created() {
    const m = pocketMonsters.find((i) => `${i.no}-${i.name}` === this.$route.params.id);
    if (!m) { throw "error"; }
    return this.monster = m;
  }
}
