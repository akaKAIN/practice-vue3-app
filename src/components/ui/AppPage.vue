<template>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
      <slot name="header"></slot>
    </h2>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppPage',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    document.title = `${props.title} | FinansEast`;
  }
});
</script>
