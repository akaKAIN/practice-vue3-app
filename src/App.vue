<template>
  <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script lang="ts">
import MainLayout from '@/layout/MainLayout.vue';
import AuthLayout from '@/layout/AuthLayout.vue';
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: { MainLayout, AuthLayout },
  setup() {
    const route = useRoute();
    const layout = computed<string>(() => route.meta.layoutName);
    return { layout };
  }
});
</script>
