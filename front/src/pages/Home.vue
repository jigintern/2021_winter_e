<template>
  <v-container class="text-center pa-12">
    <v-container class="pb-6">
      <p class="text-h2">App Name</p>
    </v-container>
    <v-container>
      テキストを入力すると、炎上度が計れます。
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
        炎上度を計測する
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
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
      const flamingNumber = 1;
      this.$store.commit("changeText", this.text);
      this.$store.commit("changeFlaming", flamingNumber);
      this.$router.push({ name: "result" });
    }
  }
}
</script>