<template>
  <section>
    <h1>{{ id }}</h1>
    <h1><monster :id="id"></monster></h1>
    <p>
      <nuxt-link :to="{ name: 'pokemon-monsters-id', params: { id: '1-フシギダネ' }}">1</nuxt-link>
    </p>
    <p>
      <nuxt-link :to="{ name: 'pokemon-monsters-id', params: { id: '2-フシギソウ' }}">2</nuxt-link>
    </p>
    <p>
      <nuxt-link :to="{ name: 'pokemon-monsters-id', params: { id: '3-フシギバナ' }}">3</nuxt-link>
    </p>
    <p>
      <nuxt-link :to="{ name: 'pokemon-monsters' }">Back</nuxt-link>
    </p>
  </section>
</template>

<script lang="ts" src="./script"></script>

