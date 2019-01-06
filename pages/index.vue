<template>
  <section>
    <h1>hello {{ message }}</h1>
    <button @click="increment">{{ counter }}</button>
    <button @click="incrementAsync">incrementAsync</button>
  </section>
</template>

<script lang="ts" src="./script.ts"></script>
