<template>
  <!-- Feature Layout is found on the home page and is horizontal in nature -->
  <div v-if="featureLayout">
    <ul>
      <blog-list-item
        v-for="{ title, summary, date, href } in posts"
        :title="title"
        :href="href"
        :summary="summary"
        :date="date"
        :layout="layout"
      />
    </ul>
  </div>
  <!-- Default Layout is found on the blog list page and is more vertical in nature -->
  <div v-else>
    <ul class="list-none grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <blog-list-item
        v-for="{ title, summary, date, href } in posts"
        :title="title"
        :href="href"
        :summary="summary"
        :date="date"
        :layout="layout"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, props } from 'vue';

// Blog posts data
import { data as posts } from '../../../posts.data';

// Components
import ContentContainer from './ContentContainer.vue';
import BlogListItem from './BlogListItem.vue';

export default defineComponent({
  props: {
    featureLayout: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    BlogListItem,
    ContentContainer,
  },
  setup(props) {
    // Programatically calculate the layout that we want for the list
    // If it's a feature layout then we want horizontal
    // If it's not then we want vertical
    const layout = computed(() => {
      return props.featureLayout ? 'horizontal' : 'vertical';
    });

    return { posts, layout };
  },
});
</script>
