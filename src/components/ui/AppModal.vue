<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3 v-if="title">{{ title }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppModal',
  emits: ['close'],
  props: {
    title: String
  }
});
</script>
