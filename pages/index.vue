<template>
  <section>
    <h1>hello {{ message }}</h1>
    <button @click="increment">{{ counter }}</button>
    <button @click="incrementAsync">incrementAsync</button>
    <p><nuxt-link :to="{ name: 'pokemon-monsters' }">pokemon</nuxt-link></p>
  </section>
</template>

<script lang="ts" src="./script.ts"></script>
