<template>
  <div>
    <h1>Hi</h1>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  head() {
    return {
      title: "Aplicacion de compras",
      meta: [
        {
          hid: "Sitio de compras",
          name: "Description",
          content: "Sitio de compras",
        },
      ],
    };
  },
  setup() {},
});
</script>
