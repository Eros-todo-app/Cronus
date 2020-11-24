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
  @Prop() private name!: string;
  @Prop() private route!: string;
}
</script>

<style lang="scss" scoped>
@use "components/button";
</style>
