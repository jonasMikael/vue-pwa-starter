<template>
<v-app>
  <v-content fill-height>
      teste
      testetes
      
    <router-view/>
  </v-content>
</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public path = '/';
}
</script>

<style lang="stylus">
</style>
