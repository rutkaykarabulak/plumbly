<script setup lang="ts">
import { ref } from "vue";
defineProps<{
    successMessage: string
}>();
</script>

<template>
    <q-layout>
        <q-page-container>
            <q-page class="text-center content-center justify-center">
                <div class="success q-pa-md shadow-9 content-center q-ma-md">
                    <h1 class="text-h4">Congratulations! ✅</h1>
                    <p class="text-subtitle1">{{ successMessage }}</p>
                    <p class="text-subtitle2">You can always edit your personal information in your personal area.</p>
                    <q-btn to="/" rounded color="dark" class="text-capitalize">Home Page</q-btn>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<style scoped>
@media screen and (min-width: 40em) {
    .success {
        max-width: 720px;
        margin: 0 auto;
    }
}

.success {
    background-color: white;
    border: 1px solid rgb(190, 184, 184);
    border-radius: 1em;
}
</style>