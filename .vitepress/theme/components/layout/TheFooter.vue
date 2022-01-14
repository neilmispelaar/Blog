<template>
  <div>
    <content-container>
      <div class="bg-slate-600">
        <p>Footer</p>
      </div>
    </content-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentContainer from "../ui/ContentContainer.vue";

export default defineComponent({
  components: {
    ContentContainer,
  },
  setup() {},
});
</script>
