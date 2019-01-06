<template>
  <section>
    <h1>ポケモン</h1>
    <table>
      <tr v-for="pocketMonster in pocketMonsters">
        <td>{{ pocketMonster.no }}</td>
        <td>{{ pocketMonster.name }}</td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts" src="./script"></script>
