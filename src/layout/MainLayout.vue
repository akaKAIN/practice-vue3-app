<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card"></div></div
></template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { TheNavbar }
});
</script>
