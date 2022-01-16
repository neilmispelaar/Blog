<template>
  <div class="bg-white">
    <content-container>
      <div class="my-20 py-32">
        <section>
          <h2 class="mb-20 text-3xl text-gray-800">Blog Posts</h2>
          <!-- We want the horizontal layout on the home page -->
          <blog-list :featureLayout="true" />
        </section>
      </div>
    </content-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import BlogList from '../ui/BlogList.vue';
import ContentContainer from '../ui/ContentContainer.vue';

export default defineComponent({
  components: {
    BlogList,
    ContentContainer,
  },
  setup() {},
});
</script>
