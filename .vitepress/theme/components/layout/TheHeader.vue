<template>
  <div>
    <content-container>
      <header>
        <h2 class="sr-only">Site header information</h2>
        <nav-bar />
      </header>
    </content-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import NavBar from './TheHeaderNavBar.vue';
import ContentContainer from '../ui/ContentContainer.vue';

export default defineComponent({
  components: {
    ContentContainer,
    NavBar,
  },
});
</script>
