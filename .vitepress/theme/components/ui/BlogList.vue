<template>
  <div>
    <ul class="list-none grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <blog-list-item
        v-for="{ title, summary, date, href } in posts"
        :title="title"
        :href="href"
        :summary="summary"
        :date="date"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Blog posts data
import { data as posts } from '../../../posts.data';

// Components
import ContentContainer from './ContentContainer.vue';
import BlogListItem from './BlogListItem.vue';

export default defineComponent({
  components: {
    BlogListItem,
    ContentContainer,
  },
  setup() {
    return { posts };
  },
});
</script>
