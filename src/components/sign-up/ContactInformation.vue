<script setup lang="ts">
import { useRoute } from "vue-router";
import { AccountType } from "@/utils/accountType";
import ContactInformationHouseholder from "@/components/sign-up/householder/ContactInformationHouseholder.vue";
import ContactInformationTechnician from "@/components/sign-up/technician/ContactInformationTechnician.vue";

const route = useRoute();
const accountType =
  AccountType[Number(route.params.accountType)] === AccountType[0]
    ? AccountType.HOUSEHOLDER
    : AccountType.TECHNICIAN;
</script>

<template>
  <ContactInformationTechnician v-if="accountType === AccountType.TECHNICIAN" />
  <ContactInformationHouseholder v-else />
</template>

<style scoped></style>
