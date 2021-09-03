<template>
  <li class="item">
    <router-link to="#" class="item__link">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.item {
  &__link {
    text-decoration: underline;
  }
}
</style>