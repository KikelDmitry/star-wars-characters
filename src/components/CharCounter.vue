<template>
  <p v-if="searched">{{ count }} {{ charWord }} found</p>
</template>

<script>
export default {
  computed: {
    searched() {
      return this.$store.state.initSearch;
    },
    count() {
      return this.$store.state.searchResults.length;
    },
    charWord() {
      return this.count == 1 ? "character" : "characters";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>