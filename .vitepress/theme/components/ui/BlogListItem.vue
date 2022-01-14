<template>
  <!-- Horizontal layout -->
  <li v-if="layout === 'horizontal'" class="my-20">
    <a :href="href">
      <article class="flex flex-row">
        <!-- Image at the left -->
        <div class="w-1/2">
          <img
            class="h-96 w-full object-cover"
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt=""
          />
        </div>
        <!-- Content container at the right -->
        <div class="w-1/2 p-10 bg-zinc-100 flex flex-col justify-between">
          <!-- Top -->
          <div>
            <h2 class="text-3xl font-normal tracking-wide">{{ title }}</h2>
            <div v-if="false">
              <p>{{ summary }}</p>
            </div>
          </div>
          <!-- Anchored botton -->
          <div class="mt-20 mb-5">
            <p>{{ date.string }}</p>
          </div>
        </div>
      </article>
    </a>
  </li>
  <!-- Vertical layout -->
  <li v-else class="flex">
    <a :href="href" class="flex">
      <article class="flex flex-col">
        <!-- Image at the top -->
        <div class="flex-shrink-0">
          <img
            class="h-64 w-full object-cover"
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt=""
          />
        </div>
        <!-- Content container at the bottom -->
        <div class="flex-1 bg-zinc-100 p-6 flex flex-col justify-between">
          <!-- Top -->
          <div class="pt-5">
            <h2 class="text-3xl font-normal tracking-wide">{{ title }}</h2>
            <div v-if="false">
              <p>{{ summary }}</p>
            </div>
          </div>
          <!-- Anchored botton -->
          <div class="mt-20 mb-5">
            <p>{{ date.string }}</p>
          </div>
        </div>
      </article>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: false,
      default: null,
    },
    date: {
      type: Object,
      required: true,
    },
    layout: {
      type: String,
      required: false,
      default: 'vertical',
      validator(value) {
        // The value must match one of these strings
        return ['horizontal', 'vertical'].includes(value);
      },
    },
  },
  setup() {},
});
</script>
