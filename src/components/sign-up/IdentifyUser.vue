<script setup lang="ts">
import { ref } from 'vue';
import IdentifyTechnician from "./IdentifyTechnician.vue";
import IdentifyHouseholder from "./IdentifyHouseholder.vue";
const userType = ref("householder");
const professions: Array<String> = [
    "Plumber",
    "Electrician",
    "Sex worker",
    "Sensei",
    "Other (specify yourself)"
];
const yearsOfExperiences: Array<String> = [
    "0-2 years",
    "2-5 years",
    "More than 5 years"
];
</script>

<template>
    <q-layout>
        <q-page-container>
            <IdentifyTechnician v-if="userType === 'technician'" :professions="professions"
                :yearsOfExperiences="yearsOfExperiences" />
            <IdentifyHouseholder v-else />
        </q-page-container>
    </q-layout>
</template>

<style scoped></style>