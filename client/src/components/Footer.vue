<template>
  <v-footer dark height="auto" class="au">
    <v-card class="flex" flat tile>
      <v-card-title class="gray">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="black justify-center">
        &copy;2018 — <strong>sublog.com</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  .au {
    /* height: 1000px; */
  }
</style>
