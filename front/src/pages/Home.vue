<template>
  <v-container class="text-center pa-12">
    <v-container class="pb-6">
      <v-img
          :src="require('../assets/enjo-checker-title.png')"
          class="my-3"
          contain
          height="250"
        />
    </v-container>
    <v-container>
      テキストを入力すると、「炎上指数」を計ることができます。
    </v-container>
    <v-container>
      <p class="text-h6 font-weight-bold">炎上指数とは？</p>
      その文章がどれくらい炎上しやすそうかを数値化したものです。
    </v-container>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-textarea
        label="ここにテキストを入力してください"
        v-model="text"
        :rules="textRules"
        required
        counter="1000"
      ></v-textarea>
      <v-btn
        color="primary"
        class="font-weight-medium"
        @click="onClick"
      >
        炎上指数を計測する
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      valid: true,
      text: "",
      textRules: [
        v => !!v || 'テキストは必須です',
        v => (v && v.length <= 1000) || 'テキストは1000文字以内にしてください',
      ],
    }
  },
  methods: {
    onClick () {
      if(!this.$refs.form.validate()) return;
      axios.get("https://e.intern.jigd.info/api/getEmotionsValue")
      .then(res => {
        const flamingNumber = res.data.documentSentiment.score;
        this.$store.commit("changeText", this.text);
        this.$store.commit("changeFlaming", flamingNumber);
        this.$router.push({ name: "result" });
      });
      
    }
  }
}
</script>