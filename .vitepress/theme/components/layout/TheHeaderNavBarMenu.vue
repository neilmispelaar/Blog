<template>
  <div class="">
    <nav>
      <ul class="flex">
        <!-- Loop through the menu items -->
        <nav-bar-menu-item
          v-for="menuItem in menuItems"
          :text="menuItem.text"
          :href="menuItem.href"
          :isExternal="menuItem.isExternal"
        />
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavBarMenuItem from './TheHeaderNavBarMenuItem.vue';

export default defineComponent({
  components: {
    NavBarMenuItem,
  },
  setup() {
    const menuItems = [
      {
        text: 'Github',
        href: 'https://github.com/neilmispelaar/neilmispelaar.github.io',
        isExternal: true,
      },
      {
        text: 'Blog',
        href: '/posts/',
        isExternal: false,
      },
      {
        text: 'About',
        href: '/about',
        isExternal: false,
      },
    ];

    return { menuItems };
  },
});
</script>
