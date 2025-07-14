<template>
  <footer class="relative bg-indigo-600 text-white pt-32 pb-12">
    <div class="absolute -top-16 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl">
      <div class="bg-gray-900 rounded-lg shadow-2xl p-6 md:p-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <h2 class="text-2xl font-bold text-white">Start a project</h2>
            <p class="text-gray-300 mt-1">
              Interested in working together? We should queue up a time to chat. I'll buy the
              coffee.
            </p>
          </div>
          <a
            href="#"
            class="flex-shrink-0 flex items-center justify-center space-x-2 bg-transparent border border-gray-400 text-white rounded-full px-6 py-3 hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-message-square"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Let's do this</span>
          </a>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 flex flex-col items-center text-center">
      <div class="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-indigo-600"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </div>

      <p class="mt-4 text-lg text-indigo-200">Living, learning, & leveling up one day at a time.</p>

      <div class="flex space-x-4 mt-6">
        <a
          href="#"
          class="w-10 h-10 flex items-center justify-center border-2 border-indigo-400 rounded-full text-indigo-300 hover:bg-white hover:text-indigo-600 hover:border-white transition-all duration-300"
        >
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Twitter</title>
            <path
              d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            />
          </svg>
        </a>
        <a
          href="#"
          class="w-10 h-10 flex items-center justify-center border-2 border-indigo-400 rounded-full text-indigo-300 hover:bg-white hover:text-indigo-600 hover:border-white transition-all duration-300"
        >
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>LinkedIn</title>
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 0 1 2.063-2.065 2.064 2.064 0 0 1 2.063 2.065c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
            />
          </svg>
        </a>
        <a
          href="#"
          class="w-10 h-10 flex items-center justify-center border-2 border-indigo-400 rounded-full text-indigo-300 hover:bg-white hover:text-indigo-600 hover:border-white transition-all duration-300"
        >
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>GitHub</title>
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
        </a>
        <a
          href="#"
          class="w-10 h-10 flex items-center justify-center border-2 border-indigo-400 rounded-full text-indigo-300 hover:bg-white hover:text-indigo-600 hover:border-white transition-all duration-300"
        >
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Dribbble</title>
            <path
              d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM3.42 14.04c.143 1.12.42 2.19.823 3.18H19.76c.403-.99.68-2.06.824-3.18H3.419zm17.114-2.08H3.467c-.12-.86-.172-1.74-.172-2.64 0-1.23.08-2.42.23-3.56h16.94c.15 1.14.23 2.33.23 3.56 0 .9-.052 1.78-.172 2.64zM19.34 3.7c-.55-.66-1.16-1.26-1.83-1.8-1.57-1.24-3.5-2-5.51-2-1.99 0-3.93.76-5.5 2.01-.68.54-1.28 1.14-1.84 1.8h14.68zM4.66 20.34c.55.65 1.16 1.26 1.83 1.8 1.58 1.25 3.5 2 5.51 2 2.01 0 3.93-.75 5.5-2 .68-.54 1.28-1.15 1.84-1.8H4.66z"
            />
          </svg>
        </a>
        <a href="#" class="social-icon">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Email</title>
            <path
              d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
            />
          </svg>
        </a>
      </div>

      <p class="mt-8 text-indigo-200 text-sm">Handcrafted by me &copy; {{ currentYear }}</p>

      <div class="mt-2 text-indigo-300 text-xs flex items-center space-x-1.5">
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
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Adicionamos estilos para os ícones sociais em um bloco de style para não repetir classes */

.social-icon svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
