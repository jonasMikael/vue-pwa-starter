<template>
  <router-view/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Watch } from 'vue-property-decorator';

@Component
export default class extends Vue {
  mounted() {
    debugger;
    var teste = "teste";
    this.$router.push('/qr-code');
  }
}
</script>

<style lang="stylus"


</style>