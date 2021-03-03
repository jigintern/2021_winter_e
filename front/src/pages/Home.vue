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
      テキストを入力すると、「<span class="font-weight-bold">炎上指数</span>」を計ることができます。
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
        class="font-weight-medium ma-2"
        :loading="loading"
        @click="onClick"
      >
        炎上指数を計測する
      </v-btn>
      <p
        v-show="isError"
        class="red--text"
      >
        エラーが発生しました。
      </p>
    </v-form>
  </v-container>
</template>

<script>

const fetchJSON = async (url, req) => {
  const opt = req ? {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  } : null;
  const res = await (await fetch(url, opt)).json();
  return res;
};

export default {
  name: "Home",
  metaInfo: {
    title: '炎上チェッカー'
  },
  data() {
    return {
      valid: true,
      text: "",
      textRules: [
        v => !!v || 'テキストは必須です',
        v => (v && v.length <= 1000) || 'テキストは1000文字以内にしてください',
      ],
      loading: false,
      isError: false,
    }
  },
  methods: {
    async onClick () {
      this.loading = true;

      try {
        const apibase = "http://localhost:8001/"; // for develop
        //const apibase = ""; // for deploy
        const flamingNumber = await fetchJSON(apibase + "api/getEmotionsValue", { sentense: this.text })
        this.$store.commit("changeText", this.text);
        this.$store.commit("changeFlaming", flamingNumber);
        this.$router.push({ name: "result" });
      } catch (e) {
        console.log(e)
        this.loading = false;
        this.isError = true;
      }
    },
  }
}
</script>