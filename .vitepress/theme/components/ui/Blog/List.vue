<template>
  <div>
    <ul class="list-none grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
      <blog-item
        v-for="{ title, summary, date, href, cover } in posts"
        :title="title"
        :href="href"
        :summary="summary"
        :date="date"
        :cover="cover"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, props } from "vue";

// Blog posts data
import { data as posts } from "../../../../posts.data";

// Components
import BlogItem from "./Item.vue";

export default defineComponent({
  components: {
    BlogItem,
  },
  setup(props) {
    return { posts };
  },
});
</script>
