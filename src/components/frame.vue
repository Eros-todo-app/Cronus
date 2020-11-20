<template>
  <div class="Frame"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface Todo {
  name: string;
  done: boolean;
  due: Date;
}

@Component({
  name: "Frame"
})
export default class Frame extends Vue {
  @Prop() public todos!: Todo[];
}
</script>

<style></style>
