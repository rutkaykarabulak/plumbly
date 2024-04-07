<script setup lang="ts">
import { ref } from "vue";
const technicians = ref([])
const options: Array<String> = [
    "Plumber",
    "Electrician",
    "Sex worker",
    "Sensei"
]
</script>

<template>
    <q-page class="text-center justify-center content-center">
        <div class="identifyUser q-mx-md q-pa-lg shadow-9">
            <h6 class="text-h6 text-weight-light">Let's start by identifying your needs</h6>
            <q-form class="q-gutter-lg q-pa-md">
                <div class="row justify-center">
                    <q-select behavior="menu" class="col-xs-12" v-model="technicians" label="Search for technicians"
                        :options="options" use-input multiple clearable use-chips
                        hint="Select one or multiple technicians as you prefer">
                        <template v-slot:prepend>
                            <q-icon name="engineering"></q-icon>
                        </template></q-select>
                </div>
                <div class="row justify-center">
                    <q-btn label="Next" rounded color="black" class="col-xs-4 col-md-4"></q-btn>
                </div>
            </q-form>
        </div>
    </q-page>
</template>

<style scoped>
@media screen and (min-width:40em) {
    .identifyUser {
        max-width: 960px;
        margin: 0 auto;
    }
}

.identifyUser {
    background-color: white;
    border: 1px solid rgb(190, 184, 184);
    border-radius: 1em;
}
</style>