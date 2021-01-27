<template>
  <nav class="navbar">
    <h3>Testing app</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Router#1</router-link>
      </li>
      <li>
        <router-link to="/">Router#2</router-link>
      </li>
      <li><a href="#">Messages</a></li>
      <li><a href="#">Exit</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheNavbar'
});
</script>
