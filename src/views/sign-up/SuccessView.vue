<script setup lang="ts">
import SuccessPage from "@/components/sign-up/SuccessPage.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { AccountType } from "@/utils/accountType";

const route = useRoute();
const accountType =
  AccountType[Number(route.params.accountType)] === AccountType[0]
    ? AccountType.HOUSEHOLDER
    : AccountType.TECHNICIAN;
const successMessage =
  accountType === AccountType.TECHNICIAN
    ? "All is set! Householder can view your contact card now."
    : "All is set! You can see the contact information of technicians now!";
</script>

<template>
  <SuccessPage :successMessage="successMessage" />
</template>

<style scoped></style>
