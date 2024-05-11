<script async setup lang="ts">
import { ref } from "vue";
const location = ref("");
const filterBy = ref("");
const options: Array<String> = ["Plumber", "Electrician", "Gardener", "Sensei"];
</script>

<template>
  <q-layout view="hHh lPr fFf">
    <header>
      <q-header class="text-center transparent text-dark" style="height: 100px">
        <h3 class="text-h3 text-weight-thin" style="letter-spacing: 3px">Plumbly</h3>
      </q-header>
    </header>
    <main>
      <q-page-container class="container">
        <h4 class="text-center italianno-regular text-h4 text-weight-light text-dark">
          Best friend of your <span class="text-white">home</span>
        </h4>
        <q-page class="q-pt-sm">
          <div class="row text-center">
            <p class="col-xs-12 q-px-sm text-body1">
              Plumbly, allows you to find nearest technicians such as plumbers, electiricians and
              many other experts in seconds
            </p>
          </div>
          <div class="row q-mx-md q-pt-lg">
            <q-input
              class="col-xs-12 col-10 q-mr-lg"
              v-model="location"
              type="text"
              color="black"
              rounded
              outlined
              autofocus
              placeholder="Enter your location"
              hint="Find all technicians for free!"
            >
              <template v-slot:prepend>
                <q-icon name="place" color="black"></q-icon>
              </template>
            </q-input>
          </div>
          <div class="row content-center justify-center q-mt-md">
            <q-select
              class="col-6"
              rounded
              outlined
              v-model="filterBy"
              :options="options"
              fill-input
              label="Filter by technician"
            >
            </q-select>
            <q-btn
              class="col-xs-4 col-sm-2 q-my-sm q-ml-md text-capitalize shadow-8"
              rounded
              color="dark"
            >
              Find
            </q-btn>
          </div>
          <div class="text-center row q-mx-md">
            <h5 class="col-xs-12 text-weight-light">Are you a professional?</h5>
            <p class="text-subtitle2 col-sm-12 text-weight-light">
              Create an account in seconds and reach thousands of customer today,
              <span class="text-white">for free!</span>
            </p>
            <div class="row col-12 q-pa-sm justify-center">
              <q-btn
                to="/signUp"
                rounded
                color="black"
                class="col-xs-4 text-capitalize shadow-12 q-mx-md"
                >Sign up</q-btn
              >
              <q-btn
                label="Login"
                outline
                rounded
                color="black"
                class="col-xs-4 text-capitaliez shadow-8"
                to="/login"
              ></q-btn>
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

@media screen and (min-width: 40em) {
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
}
</style>
