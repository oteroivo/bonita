<template>
  <!-- you'll need to handle a loading state -->
  <div v-if="pending">Loading ...</div>
  <div v-else>
    <Post title="posts.name"></Post>
  </div>
</template>

<script setup>
const { pending, data: posts } = useLazyFetch("/api/posts");
watch(posts, (newPosts) => {
  // Because posts starts out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>
