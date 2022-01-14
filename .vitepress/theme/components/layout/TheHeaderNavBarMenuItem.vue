<template>
  <li>
    <a :href="href" :v-bind="attributes" class="pl-5">
      {{ text }}
    </a>
  </li>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isExternal: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    // TODO: This logic is horrible
    // refactor this in the future
    // This computed value captures the attributes that
    // should be added to a link if the link is external or not
    const attributes = computed(() => {
      const externalAttr = {
        rel: "external",
        target: "_blank",
      };

      let attr = null;

      if (props.isExternal) {
        attr = externalAttr;
      }
      return attr;
    });

    return { attributes };
  },
});
</script>
