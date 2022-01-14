<template>
  <div>
    <content-container>
      <div class="my-32">
        <h2 class="text-5xl font-semibold">Hi</h2>
        <p class="text-5xl text-gray-500">Welcome to the blog.</p>
      </div>
    </content-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import ContentContainer from '../ui/ContentContainer.vue';

export default defineComponent({
  components: {
    ContentContainer,
  },
  setup() {},
});
</script>
