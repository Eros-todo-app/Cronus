<template>
  <div class="home">
    <main class="landing">
      <div class="info">
        <h1>Open Source <br />Todo App</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </p>
        <Button route="/register" name="Sign up!" />
      </div>
      <Phone />
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
      <div>
        <h2>Open Source</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorem hic ducimus quis fuga mollitia
          fugit, dolores sint recusandae eius quo iure, unde atque distinctio? Rem corrupti enim qui iure.
        </p>
        <Button name="Github" route="sourcecode" />
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
