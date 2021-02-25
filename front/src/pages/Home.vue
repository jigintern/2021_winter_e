<template>
  <v-container class="text-center pa-12">
    <p class="text-h2">App Name</p>
    <v-textarea
      v-model="text"
    ></v-textarea>
    <v-btn
      color="primary"
      @click="onClick"
    >
      to Result
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      text: "",
    }
  },
  methods: {
    onClick () {
      this.$router.push({ name: "result", params: { text: this.text}});
    }
  }
}
</script>