import wait from "~/assets/wait";

export default {
  async incrementAsync({ commit }: { commit: (name: string) => void }) {
    await wait(1000);
    commit("increment");
  },
};
