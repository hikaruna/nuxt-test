<template>
  <section>
    <h1>myStore</h1>
    <p>{{ counter }}</p>
    <button @click="increment">increment</button>
    <button @click="incrementAsync">incrementAsync</button>
  </section>
</template>

<script lang="ts" src="./script"></script>
