import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { computed } from 'vue';
import {useStore} from "vuex";

export function useLoginForm() {
  const { handleSubmit, isSubmitting, submitCount } = useForm();

  const MIN_LENGTH = 6;
  const {
    errorMessage: emailError,
    value: email,
    handleBlur: emailBlur
  } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Required field for email')
      .email('Wrong format of email.')
  );
  const {
    errorMessage: passwordError,
    value: password,
    handleBlur: passwordBlur
  } = useField(
    'password',
    yup
      .string()
      .required('Required field for password')
      .trim()
      .min(MIN_LENGTH, `Min length must be more as ${MIN_LENGTH} symbols.`)
  );

  const store = useStore();

  const onSubmit = handleSubmit(
    async values => await store.dispatch('auth/login', values)
  );
  const toManyAttempts = computed((): boolean => submitCount.value >= 5);

  return {
    emailError,
    email,
    emailBlur,
    passwordError,
    password,
    passwordBlur,
    isSubmitting,
    onSubmit,
    toManyAttempts
  };
}
