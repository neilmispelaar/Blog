<template>
  <li class="flex">
    <article class="flex flex-col">
      <!-- Image -->
      <div class="flex-shrink-0">
        <img
          class="h-64 w-full object-cover"
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          alt=""
        />
      </div>
      <!-- Content container -->
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
  </li>
  <li class="" v-if="false">
    <article>
      <a :href="href" class="flex flex-col h-full">
        <div class="flex-shrink-0">
          <img
            class="h-48 w-full object-cover"
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt=""
          />
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline"> Article </a>
            </p>
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">
                {{ title }}
              </p>
              <p class="mt-3 text-base text-gray-500">
                {{ summary }}
                {{ summary }}
                {{ summary }}
                {{ summary }}
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="#">
                <span class="sr-only">Roel Aufderehar</span>
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a href="#" class="hover:underline"> Roel Aufderehar </a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time datetime="2020-03-16"> Mar 16, 2020 </time>
                <span aria-hidden="true"> &middot; </span>
                <span> 6 min read </span>
              </div>
            </div>
          </div>
        </div>
        <!--
        <div class="">
          <h3 class="mb-2 text-2xl text-gray-800 font-semibold">{{ title }}</h3>
          <p class="text-2xl text-gray-500">{{ summary }}</p>
        </div>
        <div class="mt-5">
          <time class="text-xl text-gray-400">{{ date.string }}</time>
        </div>
        -->
      </a>
    </article>
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
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
