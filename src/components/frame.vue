<template>
  <div class="Frame"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface todo {
  name: string;
  done: boolean;
  due: Date;
}

@Component({
  name: "Frame",
})
export default class Frame extends Vue {
  @Prop() public todos!: todo[];
}
</script>

<style></style>
