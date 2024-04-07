<script async setup lang="ts">
import { ref } from 'vue';

const location = ref("");
</script>

<template>
    <q-layout view="hHh lPr fFf">
        <header>
            <q-header class="text-center transparent text-dark" style="height: 100px;">
                <h3 class="text-h3 text-weight-thin" style="letter-spacing: 3px;">Plumbly</h3>
            </q-header>
        </header>
        <main>
            <q-page-container class="container">
                <h4 class="text-center italianno-regular text-h4 text-weight-light text-dark">Best friend of
                    your <span class="text-white">home</span>
                </h4>
                <q-page class="q-pt-sm">
                    <div class="row text-center">
                        <p class="col-xs-12 q-px-sm text-body1">Plumbly, allows you to find
                            nearest technicians such as plumbers, electiricians and many other experts in seconds</p>
                    </div>
                    <div class="row q-mx-md q-pt-lg">
                        <q-input class="col-xs-12 col-sm-10 q-mr-lg" v-model="location" type="text" color="black"
                            rounded outlined autofocus placeholder="Enter your location"
                            hint="Find all technicians for free!">
                            <template v-slot:prepend>
                                <q-icon name="place" color="black"></q-icon>
                            </template>
                        </q-input>
                        <q-btn class="col-xs-12 col-sm q-my-md text-capitalize" outline rounded
                            style="position: relative; top: -8px;">
                            Find
                        </q-btn>
                    </div>
                    <div class="text-center row q-mx-md">
                        <h5 class="col-xs-12 text-weight-light">Are you a professional?</h5>
                        <p class="text-subtitle2 col-sm-12 text-weight-light">Create an account
                            in
                            seconds
                            and
                            reach
                            thousands of
                            customer
                            today, <span class="text-white">for
                                free!</span></p>
                        <div class="row col-12 items-center justify-center">
                            <q-btn to="/signUp" rounded color="black" class="col-xs-6 col-sm-4 text-capitalize">Sign
                                up</q-btn>
                        </div>
                    </div>
                </q-page>
            </q-page-container>
        </main>
        <footer>
            <q-footer class="transparent q-pr-sm">
                <p class="text-center">Rutkay Karabulak, 2024</p>
            </q-footer>
        </footer>
    </q-layout>
</template>

<style>
.italianno-regular {
    font-family: "Italianno", cursive;
    font-weight: 400;
    font-style: normal;
}

@media screen and (min-width:40em) {
    .container {
        max-width: 960px;
        margin: 0 auto;
    }
}
</style>