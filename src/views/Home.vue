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
    <section id="analytics" class="container">
      <div id="analytics-text">
        <div class="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        <h1>Analytical data to improve your work</h1>
        <p>With Eros great internal analytical tools you can improve your workflow and get more work done!</p>
        <Button class="Button" route="/download" name="Download the app!" />
      </div>
      <div id="analytics-graph"></div>
    </section>
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
