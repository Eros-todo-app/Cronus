<template>
  <div class="home">
    <div class="info">
      <h1>Open Source <br />Todo App</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <Button route="/register" name="Sign up!" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/button.vue";

@Component({
  components: {
    Button,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@use "layouts/home";
</style>
