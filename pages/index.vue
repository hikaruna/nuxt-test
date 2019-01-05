<template>
  <section>
    <h1>hello {{ message }}</h1>
    <button @click="increment">{{ counter }}</button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class extends Vue {
  message = "world"
  get counter() {
    return this.$store.state.counter;
  }

  increment() {
    this.$store.commit('increment');
  }
}
</script>
