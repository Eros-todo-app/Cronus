<template>
  <div class="page-not-found">
    <h1>404</h1>
    <p>The page you tried to go to doesn't exist!</p>
    <Button route="/" name="Go back home" />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/button.vue";

@Component({
  components: {
    Button
  }
})
export default class PageNotFound extends Vue {}
</script>

<style lang="scss" scoped>
@use "layouts/page-not-found";
</style>
