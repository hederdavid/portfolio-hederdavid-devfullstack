<script setup>
import { computed } from 'vue'
import ContactSection from './ContactSection.vue';

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  
  <div class="flex flex-col justify-center items-center bg-primary text-blue-100 text-center p-6 pb-24 gap-6">
    <ContactSection class="lg:mt-[-7rem] mt-[-8rem]" />
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
    <svg
      width="70px"
      height="70px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

      <g id="SVGRepo_iconCarrier">
        <path
          d="M8.50226 5.38707C8.81015 5.10997 8.8351 4.63576 8.55801 4.32787C8.28092 4.01999 7.8067 3.99503 7.49882 4.27213L5.76133 5.83587C5.02499 6.49853 4.41418 7.04822 3.99477 7.54679C3.55374 8.07104 3.24023 8.6343 3.24023 9.3296C3.24023 10.0249 3.55374 10.5882 3.99477 11.1124C4.41418 11.611 5.02498 12.1607 5.76132 12.8233L7.49882 14.3871C7.8067 14.6642 8.28092 14.6392 8.55801 14.3313C8.8351 14.0234 8.81015 13.5492 8.50226 13.2721L6.80579 11.7453C6.01792 11.0362 5.48672 10.5558 5.14262 10.1468C4.81237 9.7542 4.74023 9.52502 4.74023 9.3296C4.74023 9.13417 4.81237 8.90499 5.14262 8.51241C5.48672 8.10338 6.01792 7.62298 6.80579 6.91389L8.50226 5.38707Z"
          fill="#ffffff"
        />
        <path
          d="M15.443 10.4983C15.7201 10.1904 16.1943 10.1654 16.5022 10.4425L18.2397 12.0063C18.976 12.6689 19.5868 13.2186 20.0063 13.7172C20.4473 14.2415 20.7608 14.8047 20.7608 15.5C20.7608 16.1953 20.4473 16.7586 20.0063 17.2828C19.5868 17.7814 18.976 18.3311 18.2397 18.9937L16.5022 20.5575C16.1943 20.8346 15.7201 20.8096 15.443 20.5017C15.1659 20.1938 15.1909 19.7196 15.4988 19.4425L17.1952 17.9157C17.9831 17.2066 18.5143 16.7262 18.8584 16.3172C19.1887 15.9246 19.2608 15.6954 19.2608 15.5C19.2608 15.3046 19.1887 15.0754 18.8584 14.6828C18.5143 14.2738 17.9831 13.7934 17.1952 13.0843L15.4988 11.5575C15.1909 11.2804 15.1659 10.8062 15.443 10.4983Z"
          fill="#ffffff"
        />
        <path
          opacity="0.5"
          d="M14.1797 4.27511C14.58 4.38151 14.8182 4.79228 14.7118 5.19259L10.725 20.1926C10.6186 20.5929 10.2078 20.8312 9.80753 20.7248C9.40722 20.6184 9.16895 20.2076 9.27535 19.8073L13.2622 4.80729C13.3686 4.40697 13.7793 4.16871 14.1797 4.27511Z"
          fill="#ffffff"
        />
      </g>
    </svg>

    <p class="text-xl">Um passo de cada vez, sempre em direção à minha melhor versão</p>
    <p>Feito por mim &copy; {{ currentYear }}</p>
    <div class="mt-2 text-blue-100 text-xs flex items-center space-x-1.5">
      <span>Made with</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-red-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
      <span>using Vue & Tailwind</span>
    </div>
  </div>
</template>
