<template>
  <div>
    <content-container>
      <article>
        <header>
          <!-- Heading -->
          <div class="mx-auto my-32 bg-red-200">
            <h1 class="max-w-prose text-8xl text-zinc-700">{{ data.title }}</h1>
          </div>
          <!-- Summary -->
        </header>

        <!-- Content
        <div class="mx-auto prose prose-lg prose-zinc prose-h2:font-medium">
          <content />
        </div>
        -->
        <div class="mx-auto article">
          <content />
        </div>

        <div class="mx-auto prose prose-lg prose-zinc prose-h2:font-medium">
          <content />
        </div>
      </article>
    </content-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useData } from 'vitepress';

// Components
import ContentContainer from '../components/ui/ContentContainer.vue';

export default defineComponent({
  components: {
    ContentContainer,
  },
  setup() {
    const { frontmatter: data } = useData();

    // const { title } = useData();

    return { data };
  },
});
</script>
