<template>
  <section>
    <h1>ポケモン</h1>
    <table>
      <tr v-for="pocketMonster in pocketMonsters" :key="pocketMonster.no">
        <td>{{ pocketMonster.no }}</td>
        <td>
          <nuxt-link :to="{ name: 'pokemon-monsters-id', params: { id: getId(pocketMonster) }}">{{ pocketMonster.name }}</nuxt-link></td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts" src="./script"></script>
