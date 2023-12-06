<script setup lang="ts">
import { Icon } from "@iconify/vue";

definePageMeta({
  layout: "auth",
});

const router = useRouter();
const isLoading = ref(false);
const isSignInDisabled = ref(false);

const refLoginForm = ref();
const email = ref("vuetify3-visitor@gmail.com");
const password = ref("sfm12345");
const shopCode = ref("");
const userId = ref("");
const isFormValid = ref(true);

// show password field
const showPassword = ref(false);
const loginWithEmailAndPassword = async (email: string, password: string) => {
  router.push("/");
};

const loginWithGoogle = async () => {
  router.push("/");
};

const handleLogin = async () => {
  const { valid } = await refLoginForm.value.validate();
  if (valid) {
    isLoading.value = true;
    isSignInDisabled.value = true;
    loginWithEmailAndPassword(email.value, password.value);
  } else {
    console.log("no");
  }
};

// Error Check
const emailRules = ref([
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);

const passwordRules = ref([
  (v: string) => !!v || "Password is required",
  (v: string) =>
    (v && v.length <= 10) || "Password must be less than 10 characters",
]);

// error provider
const errorProvider = ref(false);
const errorProviderMessages = ref("");

const error = ref(false);
const errorMessages = ref("");
const resetErrors = () => {
  error.value = false;
  errorMessages.value = "";
};
</script>
<template>
  <v-card color="white" class="pa-3 ma-3" elevation="3">
    <v-card-title class="my-4 text-h4">
      <span class="flex-fill font-weight-black text-primary"> Xeus </span>
    </v-card-title>

    <!-- sign in form -->

    <v-card-text>
      <v-form
        ref="refLoginForm"
        class="text-left"
        v-model="isFormValid"
        lazy-validation
      >
        <v-text-field
          v-model="shopCode"
          variant="underlined"
          label="店舗コード"
          color="primary"
        ></v-text-field>
        <v-text-field
          v-model="userId"
          variant="underlined"
          label="担当者ID"
          color="primary"
        ></v-text-field>
        <v-text-field
          ref="refPassword"
          v-model="password"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          :error="error"
          :error-messages="errorMessages"
          label="パスワード"
          placeholder="sfm12345"
          density="default"
          variant="underlined"
          color="primary"
          bg-color="#fff"
          :rules="passwordRules"
          name="password"
          outlined
          validateOn="blur"
          @change="resetErrors"
          @keyup.enter="handleLogin"
          @click:append-inner="showPassword = !showPassword"
        ></v-text-field>
        <v-btn
          :loading="isLoading"
          :disabled="isSignInDisabled"
          block
          size="x-large"
          color="primary"
          @click="handleLogin"
          class="mt-2"
          >ログイン</v-btn
        >

        <div v-if="errorProvider" class="error--text my-2">
          {{ errorProviderMessages }}
        </div>
      </v-form></v-card-text
    >
  </v-card>
</template>

<style scoped lang="scss">
.main-bg {
  background-image: linear-gradient(to right, #d5dbe7, #d5dbe7);
}
</style>
