<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Enter:</h1>

    <div :class="['form-control', { invalid: emailError }]">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="emailBlur" />
      <small v-if="emailError">{{ emailError }}</small>
    </div>

    <div :class="['form-control', { invalid: passwordError }]">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        @blur="passwordBlur"
      />
      <small v-if="passwordError">{{ passwordError }}</small>
    </div>

    <button class="btn primary" :disabled="isSubmitting || toManyAttempts">
      Push
    </button>
    <p class="text-danger" v-if="toManyAttempts">To many form submit</p>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLoginForm } from '@/use/login-form';

export default defineComponent({
  name: 'Auth',
  setup() {
    return { ...useLoginForm() };
  }
});
</script>
