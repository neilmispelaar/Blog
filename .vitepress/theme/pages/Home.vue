<template>
  <div>
    <!-- Hero Section -->
    <hero />
    <!-- Blog Posts Section -->
    <blog-posts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Hero from '../components/home/Hero.vue';
import BlogPosts from '../components/home/BlogPosts.vue';

export default defineComponent({
  components: {
    Hero,
    BlogPosts,
  },
  setup() {},
});
</script>
