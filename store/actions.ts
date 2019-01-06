export default {
  incrementAsync({ commit }: { commit: (name: string) => void }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
