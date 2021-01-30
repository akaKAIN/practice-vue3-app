<template>
  <div class="container">
    <message-block></message-block>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageBlock from '@/components/ui/MessageBlock.vue';

export default defineComponent({
  name: 'AuthLayout',
  components: { MessageBlock }
});
</script>
