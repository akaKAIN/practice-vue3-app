<template>
  <div v-if="message" :class="['alert', message.messageType]">
        <p class="alert-title">{{ title }}</p>
    <p>{{ message.message }}</p>
    <span class="alert-close">&times;</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import {MessageObject} from "@/utils/error";

export default defineComponent({
  name: 'MessageBlock',
  setup() {
    const store = useStore();

    const MESSAGE_MAP = {
      primary: 'Success',
      warning: 'Warning',
      danger: 'Error!'
    };

    const message = computed<MessageObject>(() => store.getters.message);
    const title = computed<string>(() =>
      message.value ? MESSAGE_MAP[message.value.messageType] : ''
    );

    return { message, title };
  }
});
</script>
