<template>
  <div class="home">
    <main class="landing">
      <div class="wrapper">
        <div class="info">
          <h1>Easy to use <br />Todo App</h1>
          <p>
            Eros, is an easy to use todo app that's fast, response and will suit all your needs. If it doesn't just
            request the feature!
          </p>
          <Button route="/register" name="Sign up!" />
        </div>
        <Phone />
      </div>
    </main>
    <section class="quote-section">
      <div class="quotes">
        <Quote
          name="John Doe"
          quoteBody="Work and thou canst escape the reward; whether the work be fine or course, planting corn or writing epics, so only it be honest work, done to thine own approbation, it shall earn a reward to the senses as well as to the thought."
        />
        <Quote
          name="Jane Doe"
          quoteBody="Flash powder makes a more brilliant light than the arc lamp, but you can't use it to light your street corner because it doesn't last long enough. Stability is more essential to success than brilliancy."
        />
        <Quote
          name="Lisandra Doe"
          quoteBody="You can always tell an old soldier by the inside of his holsters and cartridge boxes. The young ones carry pistols and cartridges: the old ones, grub."
        />
      </div>
    </section>
    <section class="open-source">
      <div class="wrapper">
        <div id="open-source-info">
          <h2>Open Source</h2>
          <p>
            Eros is fully open soruce and maintained by
            <a href="https://github.com/TitusEntertainment">Eddie Englund</a>. This means that you know exactly what's
            done with your data and you can trust it to do the right thing.
          </p>
          <Button name="Github" route="sourcecode" />
        </div>
        <div class="placeholder"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/button.vue";
import Phone from "@/components/frame.vue";
import Quote from "@/components/quote.vue";

@Component({
  components: {
    Button,
    Phone,
    Quote,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@use "layouts/home";
</style>
