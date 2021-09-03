<template>
  <input
    type="text"
    placeholder="Enter charachter's name..."
    v-model="input"
    @input="findChar"
    class="input"
  />
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    findChar() {
      this.$store.state.initSearch = true;
      let results = (this.$store.state.searchResults = []),
        chars = this.$store.state.charList;
      for (let i = 0; i < chars.length; i++) {
        let name = chars[i].name;
        if (
          name.includes(this.input) ||
          name.toLowerCase().includes(this.input.toLowerCase())
        ) {
          results.push(chars[i]);
        }
      }
      if (this.input == "") {
        this.$store.state.searchResults = [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: block;
  width: 100%;
  min-width: 0;
  max-width: 360px;
  height: 32px;
  padding: 0.3em 0.2em;
  border: 0;
  background-color: #fff;
  border-radius: 5px;
}
</style>