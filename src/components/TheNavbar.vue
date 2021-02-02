<template>
  <nav class="navbar">
    <h3>Testing app</h3>
    <ul class="navbar-menu">
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Help' }">Help</router-link>
      </li>
      <li><a href="#">Messages</a></li>
      <li><a @click.prevent="logout">Exit</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'TheNavbar',
  setup() {
    const router = useRouter();
    const store = useStore();
    const logout = () => {
      store.commit('auth/logout');
      router.push('/auth');
    };

    return { logout };
  }
});
</script>
