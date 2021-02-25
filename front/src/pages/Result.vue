<template>
  <v-container class="text-center pa-12">
    <v-container>
      <div class="text-left pl-12">炎上度は...</div>
      <p class="text-h2">{{ flaming }}</p>
      <div class="text-right pr-12">でした</div>
    </v-container>
    {{ text }}
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
  props: {
    text: String,
    flaming: Number,
  },
  data() {
    return {
      
    }
  },
  methods: {
    tweet() {
      const shareText = "このツイートの炎上度は" + this.flaming + "でした！";
      const shareURL = "https://twitter.com/intent/tweet?text=" + shareText + "&url=" + "http://localhost:8080/";
      location.href = shareURL;
    }
  }
}
</script>

<style scoped>

</style>