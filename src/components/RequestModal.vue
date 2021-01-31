<template>
  <form class="form-control">
    <label for="select"></label>
    <select id="select" v-model="position">
      <option v-for="item in options" :key="item.id"></option>
    </select>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import {SelectOption} from "@/models/base";

export default defineComponent({
  name: "RequestModal",
  setup() {
    const options: SelectOption[] = [
      {id: 0, name: 'Products', value: 'product'},
      {id: 1, name: 'Products', value: 'product'},
      {id: 2, name: 'Products', value: 'product'}
    ]

    const position = ref<number>(0)
    const amount = ref<number>(0)
    const date = new Date().toLocaleDateString()

    return { position, amount, date }
  }
});
</script>
