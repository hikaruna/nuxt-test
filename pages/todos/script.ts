import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  get todos() { return this.$store.state.todos.list }
  addTodo(e) {
    this.$store.commit('todos/add', e.target.value)
    e.target.value = ''
  }
}
