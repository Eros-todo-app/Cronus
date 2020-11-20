<template>
  <router-link class="Button" :to="route">
    <button>
      {{ name }}
    </button>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Button"
})
export default class Button extends Vue {
  @Prop() public name!: string;
  @Prop() public route!: string;
}
</script>

<style lang="scss">
@use "components/button";
</style>
