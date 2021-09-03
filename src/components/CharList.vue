<template>
  <div>
    <ul>
      <char-list-item
        v-for="char in charList"
        :key="char.name"
        :name="char.name"
      ></char-list-item>
    </ul>
  </div>
</template>

<script>
import CharListItem from "./CharListItem.vue";

export default {
  components: {
    CharListItem,
  },
  computed: {
    charList() {
      return this.$store.state.searchResults;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>