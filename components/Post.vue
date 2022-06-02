<template>
  <nuxt-link to="/home">
    <li>{{ id }} - {{ title }}</li>
  </nuxt-link>
</template>

<script>
export default {
  props: ["id", "title"],

  setup() {},
};
</script>
