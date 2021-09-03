<template>
  <div v-if="!isLoaded" class="loader">
    <p class="loader__caption">Loading characters...</p>
    <img :src="svg" alt="animated loader image" class="loader__img" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      svg: require("../assets/img/loader.svg"),
    };
  },
  computed: {
    isLoaded() {
      return this.$store.state.isLoaded;
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.92);

  &__img {
    width: 64px;
    height: 64px;
    padding: 10px;
  }
  &__caption {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>