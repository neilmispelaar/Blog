<template>
  <div>
    <the-skip-nav />
    <the-header />
    <main>
      <component :is="contentPageComponent" />
    </main>
    <the-footer />
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, defineComponent } from 'vue';
import { useRoute, useData } from 'vitepress';

// Page layout components
import TheHeader from '../components/layout/TheHeader.vue';
import TheSkipNav from '../components/layout/TheSkipNav.vue';
import TheFooter from '../components/layout/TheFooter.vue';

// Page content component
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import BlogList from '../pages/BlogList.vue';
import BlogPost from '../pages/BlogPost.vue';

export default defineComponent({
  components: {
    TheHeader,
    TheSkipNav,
    TheFooter,
    Home,
    About,
    BlogList,
    BlogPost,
  },
  setup() {
    // generic state
    const route = useRoute();
    const { site, page, theme, frontmatter } = useData();

    // home
    const enableHome = computed(() => {
      console.log(frontmatter.value.home);
      return !!frontmatter.value.home;
    });

    // page content component
    // Figure out what the page content component should be
    // The options are:
    // - Home
    // - BlogList
    // - BlogPage
    // - About
    // -
    const contentPageComponent = computed(() => {
      // Set the default
      let pageComponent = 'Page';

      // Check if the layout frontmatter is set
      const lowerCaseLayout = frontmatter.value.layout
        ? frontmatter.value.layout.toLowerCase()
        : undefined;

      // Set the default
      switch (lowerCaseLayout) {
        case 'home':
          pageComponent = 'Home';
          break;
        case 'bloglist':
          pageComponent = 'BlogList';
          break;
        case 'blogpost':
          pageComponent = 'BlogPost';
          break;
        case 'about':
          pageComponent = 'About';
          break;
        default:
          pageComponent = 'Page';
      }

      console.log(pageComponent);

      return pageComponent;
    });

    return {
      enableHome,
      contentPageComponent,
    };
  },
});
</script>
