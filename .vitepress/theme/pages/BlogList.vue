<template>
  <div class="bg-white">
    <content-container>
      <div class="my-32 py-32">
        <section>
          <h1 class="mb-20 text-3xl text-gray-800">Blog Posts</h1>
          <!-- We want the horizontal layout on the home page -->
          <blog-list />
        </section>
      </div>
    </content-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import BlogList from '../components/ui/BlogList.vue';
import ContentContainer from '../components/ui/ContentContainer.vue';

export default defineComponent({
  components: {
    BlogList,
    ContentContainer,
  },
  setup() {},
});
</script>
