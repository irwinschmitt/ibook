<template>
  <div class="presentation">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt
      libero quis, temporibus nam a nostrum, omnis eveniet atque accusamus illo
      modi impedit inventore. Dolores a placeat provident voluptatem et!
      Eligendi debitis, dolorum consectetur quisquam rem suscipit quaerat illo
      eum, praesentium unde consequatur pariatur eius sapiente officia deleniti
      magni placeat doloribus. Cum hic doloribus laborum accusantium impedit
      amet illum illo.
    </p>

    <img src="@/assets/images/presentation.svg" alt="Apresentação" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;

  @include screen("small", "medium") {
    grid-template-columns: 1fr;
  }

  p {
    line-height: 26px;
  }

  img {
    max-width: 100%;
  }
}
</style>
