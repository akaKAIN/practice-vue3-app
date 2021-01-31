<template>
  <app-page title="List of expenses">
    <template #header>
      <button class="btn primary" @click="activateModal">Add new</button>
    </template>

    <request-table :list="[1, 2, 3]"></request-table>

    <teleport to="body">
      <app-modal
        v-if="modal"
        title="Modal title"
        @close="closeModal"
      ></app-modal>
    </teleport>
  </app-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppPage from '@/components/ui/AppPage.vue';
import RequestTable from '@/components/RequestTable.vue';
import AppModal from '@/components/ui/AppModal.vue';

export default defineComponent({
  name: 'Home',
  components: { AppModal, RequestTable, AppPage },
  setup() {
    const modal = ref<boolean>(false);
    const activateModal = () => (modal.value = true);
    const closeModal = () => (modal.value = false);

    return { modal, activateModal, closeModal };
  }
});
</script>
