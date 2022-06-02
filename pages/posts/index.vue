<script setup>
useHead({
  titleTemplate: "My App - %s",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});

const { data: posts } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
</script>

<template>
  <Post
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :id="post.id"
  ></Post>
</template>
