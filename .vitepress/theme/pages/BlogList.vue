<template>
  <div>
    <content-container>
      <h1>Blog List</h1>
      <content />
    </content-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import ContentContainer from '../components/ui/ContentContainer.vue';

export default defineComponent({
  components: {
    ContentContainer,
  },
  setup() {},
});
</script>
