<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="select">Position</label>
      <select id="select" v-model="position">
        <option v-for="item in options" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="form-control">
      <label for="amount">Amount</label>
      <input id="amount" type="number" v-model.number="amount" />
    </div>
    <div class="form-control">
      <label for="date">Date</label>
      <input id="date" type="date" v-model="date" />
    </div>
    <button class="btn primary" type="submit">Add</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SelectOption } from '@/models/base';

export default defineComponent({
  name: 'RequestModal',
  setup() {
    const options: SelectOption[] = [
      { id: 0, name: 'Food' },
      { id: 1, name: 'Dress' },
      { id: 2, name: 'Book' },
      { id: 3, name: 'Child' }
    ];

    const position = ref<number>(0);
    const amount = ref<number>(100);
    const date = new Date().toLocaleDateString();

    const onSubmit = () => {
      const data = { position: position.value, amount: amount.value, date };
      console.log(data);
    };

    return { options, position, amount, date, onSubmit };
  }
});
</script>
