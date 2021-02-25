<template>
  <v-container class="text-center pa-12">
    <p class="text-left pl-12">flaming is ...</p>
    <v-container>
      <p class="text-h2">{{ flaming }}</p>
    </v-container>
    {{ text }}
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
  }
}
</script>

<style scoped>

</style>