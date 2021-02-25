<template>
  <v-container class="text-center pa-12">
    <v-container class="pb-6">
      <p class="text-h2">App Name</p>
    </v-container>
    <v-container>
      descriptiondescriptiondescription
    </v-container>
    <v-textarea
      label="ここにテキストを入力してください"
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
      const flamingNumber = 1;
      this.$router.push({ name: "result", params: { text: this.text, flaming: flamingNumber}});
    }
  }
}
</script>