<template>
  <h1 class="page-title">
    {{ title }}
    <strong> {{ strong }} </strong>
  </h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    strong: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;

  @include screen("medium", "small") {
    grid-template-columns: 1fr;
    font-size: 1.8rem;
  }

  b {
    color: color("dark", "darkest");
  }
}
</style>
