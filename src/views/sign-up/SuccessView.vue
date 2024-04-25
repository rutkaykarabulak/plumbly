<script setup lang="ts">
import SuccessPage from "@/components/sign-up/SuccessPage.vue";
import { ref } from "vue";
const userType = ref("householder");
const successMessage =
  userType.value === "technician"
    ? "All is set! Householder can view your contact card now."
    : "All is set! You can see the contact information of techinicians now!";
</script>

<template>
  <SuccessPage :successMessage="successMessage" />
</template>

<style scoped></style>
