<template>
  <footer>
    <div class="mt-10 pt-20 bg-zinc-50">
      <h2 class="sr-only">Site footer information</h2>

      <content-container>
        <div class="flex flex-row justify-between items-center">
          <div class="w-1/2">
            <p class="text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse suscipit bibendum blandit. Suspendisse ultricies
              gravida ipsum nec blandit. Cras gravida augue non nisl sodales
              mollis.
            </p>
          </div>
          <div class="w-1/3">
            <nav>
              <ul
                class="list-none my-10 p-2 grid grid-rows-3 grid-flow-col gap-4"
              >
                <li
                  v-for="({ text, href, isExternal }, index) in menuItems"
                  :key="index"
                  class=""
                >
                  <a
                    :href="href"
                    class="
                      block
                      py-2
                      text-zinc-600 text-sm
                      uppercase
                      font-medium
                      tracking-widest
                    "
                  >
                    {{ text }}
                    <span v-if="isExternal">
                      <svg
                        class="
                          h-3
                          w-3
                          fill-current
                          text-brand-green-500
                          inline-block
                        "
                        height="100px"
                        width="100px"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 500 500"
                        enable-background="new 0 0 500 500"
                        xml:space="preserve"
                      >
                        <g>
                          <g>
                            <g>
                              <path
                                d="M338.7,140.3c-22.4,22.4-44.9,44.9-67.3,67.3C235.6,243.5,199.8,279.2,164,315     c-8.2,8.2-16.4,16.4-24.7,24.7c-5.7,5.7-5.7,15.5,0,21.2c5.7,5.7,15.5,5.7,21.2,0c22.4-22.4,44.9-44.9,67.3-67.3     c35.8-35.8,71.6-71.6,107.3-107.3c8.2-8.2,16.4-16.4,24.7-24.7c5.7-5.7,5.7-15.5,0-21.2C354.1,134.6,344.4,134.6,338.7,140.3     L338.7,140.3z"
                              ></path>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M355.9,265.2c2.8-33.7,5.6-67.4,8.4-101c0.4-4.8,0.8-9.6,1.2-14.5c0.6-7.6-7.4-15.6-15-15     c-33.7,2.8-67.4,5.6-101,8.4c-4.8,0.4-9.6,0.8-14.5,1.2c-7.8,0.6-15.4,6.4-15,15c0.3,7.6,6.6,15.7,15,15     c33.7-2.8,67.4-5.6,101-8.4c4.8-0.4,9.6-0.8,14.5-1.2c-5-5-10-10-15-15c-2.8,33.7-5.6,67.4-8.4,101c-0.4,4.8-0.8,9.6-1.2,14.5     c-0.7,7.8,7.4,15.3,15,15C349.6,279.8,355.2,273.6,355.9,265.2L355.9,265.2z"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M430.3,435.5c-12.7,0-25.4,0-38.2,0c-30.3,0-60.5,0-90.8,0c-35.9,0-71.9,0-107.8,0c-29.8,0-59.5,0-89.3,0    c-8.9,0-17.8,0-26.7,0c-2.3,0-4.5,0-6.8,0c-0.5,0-1,0-1.5,0c-0.1,0-0.2,0-0.3,0c-0.5,0-0.9,0-1.4,0c3.2,0-2.7-1.5,0,0    c-1-0.5-3-2.2-1.2-0.5c-0.5-0.4-0.9-0.9-1.4-1.3c-1.5-1.7,1.3,1.9,0,0c-0.4-0.5-0.7-1.1-0.9-1.7c0.1,0.2,1.1,2.2,0.3,0.6    c-0.3-0.6-0.3-1.3-0.5-1.9c0.7,2.5,0.1,0.9,0.1,0c0-0.2,0-0.5,0-0.7c0-1.8,0-3.5,0-5.3c0-8.1,0-16.1,0-24.2c0-28.8,0-57.6,0-86.4    c0-35.9,0-71.8,0-107.6c0-31.1,0-62.2,0-93.4c0-14.5,0.2-29,0-43.5c0-0.1,0-0.2,0-0.2c0-0.9,0.2-2.1,0-0.7    c-0.2,1.7,1.6-3.6,0.1-0.6c0.4-0.8,0.8-1.5,1.3-2.2c-0.1,0.2-1.5,1.9-0.4,0.6c0.4-0.5,0.9-0.9,1.4-1.3c-0.7,0.6-2.2,1.1,0.1,0.1    c2.4-1-1.5-0.2,1.2-0.5c3.3-0.4-2.4-0.2,1.3-0.2c0.9,0,1.9,0,2.8,0c6.7,0,13.3,0,20,0c27.1,0,54.2,0,81.3,0c35.6,0,71.3,0,106.9,0    c32.3,0,64.7,0,97,0c17.2,0,34.4-0.1,51.6,0c0.5,0,1,0,1.5,0c0.1,0,0.1,0,0.2,0c0.9,0,2.5,0.6,0-0.1c0.6,0.2,1.3,0.2,1.9,0.5    c2,1-2.1-0.8,0,0c0.6,0.2,1.1,0.7,1.6,1c-2.2-1.4-0.6-0.5-0.1,0.1c1.8,1.8-0.3-1.3,0.8,1c0.3,0.6,0.9,2.5,0.1-0.1    c0.1,0.2,0.7,1.7,0.5,1.9c-0.3,0.4,0,0.6,0-0.7c0,0.4,0.1,1,0,1.4c0,0.3,0,0.5,0,0.8c0.1,5.2,0,10.4,0,15.7c0,25.3,0,50.6,0,75.9    c0,35.3,0,70.5,0,105.8c0,33.4,0,66.7,0,100.1c0,19.6,0,39.2,0,58.8c0,1.3,0,2.7,0,4c0,0.1,0,0.2,0,0.3c0,0.4,0,0.9,0,1.4    c0-3.3-0.8,1.9-0.3,0.6c0.8-1.9-1.9,2.7-0.6,1.1c1-1.3-3.1,2.3-0.4,0.5c-1,0.6-3.3,1.6-1,0.8c-0.8,0.3-1.7,0.5-2.5,0.7    C430.9,435.5,433.3,435.4,430.3,435.5c-7.8,0.3-15.4,6.7-15,15c0.4,7.9,6.6,15.3,15,15c20.8-0.7,34.8-17,34.8-37.2    c0-6.6,0-13.2,0-19.8c0-27.7,0-55.5,0-83.2c0-36.3,0-72.7,0-109c0-32.6,0-65.3,0-97.9c0-16.1,0.2-32.2,0-48.3    c-0.2-19.9-15.6-35.1-35.4-35.5c-5.1-0.1-10.2,0-15.2,0c-25.7,0-51.3,0-77,0c-36.1,0-72.2,0-108.3,0c-33.8,0-67.6,0-101.3,0    c-18.8,0-37.5,0-56.3,0C52,34.5,35.3,47.6,34.2,68c-0.2,3.9,0,7.8,0,11.7c0,23.6,0,47.1,0,70.7c0,35.5,0,71,0,106.6    c0,34.7,0,69.5,0,104.2c0,21.3,0,42.5,0,63.8c0,11.4,1.9,22.4,10.7,30.8c8.5,8.1,19,9.8,30,9.8c21.3,0,42.7,0,64,0    c34.8,0,69.5,0,104.3,0c35.5,0,71,0,106.5,0c23.6,0,47.1,0,70.7,0c3.3,0,6.7,0,10,0c7.8,0,15.4-6.9,15-15    C444.9,442.4,438.7,435.5,430.3,435.5z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="py-12 border-t border-zinc-300">
          <p class="text-base text-zinc-400 font-medium">
            © 2022 Neil Mispelaar
          </p>
        </div>
      </content-container>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentContainer from '../ui/ContentContainer.vue';

export default defineComponent({
  components: {
    ContentContainer,
  },
  setup() {
    const menuItems = [
      {
        text: 'Home',
        href: '/',
        isExternal: false,
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
      {
        text: 'Github',
        href: 'https://github.com/neilmispelaar/',
        isExternal: true,
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/neilmispelaar/',
        isExternal: true,
      },
    ];

    return { menuItems };
  },
});
</script>
