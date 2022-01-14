<template>
  <div
    class="
      w-full
      py-5
      md:py-12
      flex flex-row flex-nowrap
      justify-between
      items-center
    "
  >
    <div class="">
      <a
        class="font-semibold text-2xl tracking-tigsht tracking-normal"
        href="/"
      >
        Neil Mispelaar
      </a>
    </div>

    <nav-bar-menu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarMenu from "./TheHeaderNavBarMenu.vue";

export default defineComponent({
  components: {
    NavBarMenu,
  },
  setup() {},
});
</script>
