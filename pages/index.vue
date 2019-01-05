<template>
  <h1>hello {{ message }}: {{ title }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  message = "world"
  get title() {
    return this.$store.state.title
  }
}
</script>
