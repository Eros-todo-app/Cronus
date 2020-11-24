<template>
  <div class="quote">
    <blockquote>{{ quoteBody }}</blockquote>
    <cite>{{ name }}</cite>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Quote",
})
export default class Quote extends Vue {
  @Prop() private name!: string;
  @Prop() private quoteBody!: string;
}
</script>

<style lang="scss" scoped>
@use "components/quote";
</style>
