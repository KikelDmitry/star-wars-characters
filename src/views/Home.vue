<template>
  <!-- temp-wrapper -->
  <div class="wrapper">
    <h1>Star Wars characters</h1>
    <char-find></char-find>
    <char-counter></char-counter>
    <char-list></char-list>
    <app-loader></app-loader>
  </div>
</template>

<script>
import CharCounter from "../components/CharCounter.vue";
import CharFind from "../components/CharFind.vue";
import CharList from "../components/CharList.vue";
import AppLoader from "../components/AppLoader.vue";

export default {
  data() {
    return {
      api: "https://swapi.dev/api/people",
    };
  },
  components: {
    CharFind,
    CharList,
    CharCounter,
    AppLoader,
  },
  mounted() {
    this.getChars(this.api);
  },
  methods: {
    getChars(url) {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          // this.$store.state.charList = json.results;
          this.$store.state.charList.push(...json.results);
          if (json.next) {
            this.getChars(json.next);
          } else {
            this.$store.state.isLoaded = true;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
}
</style>