<template>
  <div class="home">
    <main class="landing">
      <div class="container">
        <div class="info">
          <h1>The only todo app you will ever need.</h1>
          <p>
            Cronus is the free and open source todo app that works on all your devices that is customizable, fast and
            easy to use.
          </p>
          <Button class="Button" route="/register" name="Sign up!" />
          <ButtonSecondary class="Button" id="learn-more" route="/more" name="Learn more" />
        </div>
        <img src="@/assets/mobile_dark_medium.png" alt="Mobile design" />
      </div>
    </main>
    <section id="Usp-section"><Usp /></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/button.vue";
import ButtonSecondary from "@/components/button-secondary.vue";
import Usp from "@/components/usp.vue";

@Component({
  components: {
    Button,
    ButtonSecondary,
    Usp,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@use "layouts/home";
</style>
