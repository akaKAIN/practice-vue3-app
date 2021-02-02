<template>
  <div v-if="message" :class="['alert', message.messageType]">
    <p class="alert-title">{{ title }}</p>
    <p>{{ message.message }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { MessageObject } from '@/utils/error';

export default defineComponent({
  name: 'MessageBlock',
  setup() {
    const MESSAGE_MAP = {
      primary: 'Success',
      warning: 'Warning',
      danger: 'Error!'
    };

    const store = useStore();

    const message = computed<MessageObject>(() => store.getters['message']);
    const title = computed<string>(() =>
      message.value ? MESSAGE_MAP[message.value.messageType] : ''
    );
    const close = () => store.dispatch('clearMessage', { root: true });

    return { message, title, close };
  }
});
</script>
