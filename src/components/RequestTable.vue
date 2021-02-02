<template>
  <h4 class="text-center" v-if="!list.length">No element in list</h4>
  <table class="table" v-else>
    <thead>
      <tr>
        <th>Date</th>
        <th>Position</th>
        <th>Sum</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RequestTable',
  props: {
    list: Array
  }
  // setup() {}
});
</script>
