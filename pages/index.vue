<template>
  <section>
    <h1>helloworld</h1>
    <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
  </section>
</template>
