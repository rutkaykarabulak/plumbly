<script setup lang="ts"></script>

<template>
    <q-layout>
        <q-page-container>
            <q-page class="text-center justify-center content-center">
                <div class="validateEmail q-ma-sm shadow-8">
                    <h4 class="text-h4 q-mb-sm">Please check your email</h4>
                    <q-icon color="indigo" name="done_outline" size="xl"></q-icon>
                    <p class="text-subtitle1">It's <strong>mandatory</strong> to validate your email to use plumbly</p>
                    <p class="text-subtitle2">
                        If you haven't received validation email yet,
                        <a class="text-indigo-8" href="#">click here to send it again</a>
                    </p>
                    <q-btn to="/" rounded color="dark" class="text-capitalize q-ma-md">Home page</q-btn>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<style scoped>
@media screen and (min-width: 40em) {
    .validateEmail {
        max-width: 540px;
        margin: 0 auto;
    }
}

.validateEmail {
    border: 1px solid rgb(190, 184, 184);
    border-radius: 1em;
    background-color: rgb(224, 228, 230);
}
</style>
