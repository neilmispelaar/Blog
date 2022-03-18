<template>
  <div class="bg-gray-100 flex flex-col">
    <!-- Post Information -->
    <div class="order-2 grow">
      <div class="pt-8 px-6">
        <!-- Title -->
        <h3 class="text-xl font-medium">{{ title }}</h3>
        <!-- Description if available -->
        <div v-if="summary">
          <p class="my-5 text-gray-600">
            {{ summary }}
          </p>
        </div>
      </div>
    </div>
    <!-- Post Cover Image -->
    <div class="order-1">
      <img class="h-[18rem] w-full object-cover" :src="cover" alt="" />
    </div>
    <!-- Read more and date  -->
    <div class="order-3">
      <div class="mb-5 py-5 px-5 flex flex-row items-center justify-between">
        <!-- Read more link -->
        <div class="w-1/3">
          <a
            :href="href"
            class="w-full inline-flex items-center justify-center px-3 py-3 border border-transparent shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >Read more</a
          >
        </div>

        <!-- Date if available -->
        <div class="w-2/3" v-if="date">
          <p class="text-sm text-gray-500 text-right font-normal">
            <span class="sr-only">Published on: </span>{{ date.string }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, props } from "vue";

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
      default: "",
    },
    cover: {
      type: String,
      required: false,
      default:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    date: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
