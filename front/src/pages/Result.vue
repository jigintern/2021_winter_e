<template>
  <v-container class="text-center pa-12">
    <v-container>
      <div class="text-left pl-12">炎上度は...</div>
      <p class="text-h2">{{ flaming }}</p>
      <div class="text-right pr-12">でした</div>
    </v-container>
    <v-card class="text mx-16 my-5 pa-5 text-left">{{ text }}</v-card>
    <v-btn
      color="twitter"
      class="white--text"
      @click="tweet"
    >
      <v-icon class="mr-2">mdi-twitter</v-icon>
      ツイートする
    </v-btn>
    
  </v-container>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      flaming: this.$store.state.flamingNumber,
      text: this.$store.state.text,
    }
  },
  methods: {
    tweet() {
      const shareText = "このテキストの炎上度は" + this.flaming + "でした！" + this.text;
      const shareURL = "https://twitter.com/intent/tweet?text=" + shareText + "&url=" + "https://jigintern.github.io/2021_winter_e";
      location.href = shareURL;
    }
  }
}
</script>

<style scoped>
.text {
  white-space: pre-wrap;
  word-wrap:break-word;
}
</style>
