<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  color: String,
  githubLink: String,
  liveLink: String,
})

const active = ref(false)

const toggleActive = (event) => {
  // Evita toggle ao clicar em links
  if (event.target.closest('a')) return
  active.value = !active.value
}

const handleLinkClick = (event) => {
  event.stopPropagation()
}
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-out cursor-pointer h-64 w-full max-w-sm"
    :class="{ 'shadow-2xl': active }"
    @click="toggleActive"
  >
    <!-- Background with dynamic color -->
    <div
      class="absolute inset-0 bg-gradient-to-br transition-all duration-500"
      :class="[
        color || 'from-blue-500 to-purple-600',
        active ? 'opacity-100' : 'opacity-90 group-hover:opacity-100',
      ]"
    ></div>

    <!-- Animated overlay effect -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-700 transform -skew-x-12"
      :class="
        active
          ? 'opacity-20 translate-x-full'
          : 'opacity-0 -translate-x-full group-hover:opacity-20 group-hover:translate-x-full'
      "
    ></div>

    <!-- Particle effect -->
    <div
      class="absolute inset-0 transition-opacity duration-500"
      :class="active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
    >
      <div class="absolute top-4 left-4 w-1 h-1 bg-white rounded-full animate-ping"></div>
      <div class="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-ping animation-delay-200"></div>
      <div class="absolute bottom-6 left-6 w-1 h-1 bg-white rounded-full animate-ping animation-delay-400"></div>
      <div class="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-ping animation-delay-600"></div>
    </div>

    <!-- Initial state - showing title -->
    <div
      class="absolute inset-0 flex items-center justify-center text-white transition-all duration-500 ease-out will-change-transform will-change-opacity"
      :class="active
        ? 'translate-y-[-120%] opacity-0'
        : 'translate-y-0 opacity-100 group-hover:-translate-y-120 group-hover:opacity-0'"
      style="transform: translateY(var(--tw-translate-y));"
    >
      <h3 class="text-2xl font-bold text-center px-4">{{ title }}</h3>
    </div>

    <!-- Hover/Active state - showing description and buttons -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center text-white p-6 transition-all duration-500 ease-out will-change-transform will-change-opacity"
      :class="{
        'translate-y-0 opacity-100 pointer-events-auto': active,
        'translate-y-full opacity-0 pointer-events-none': !active,
        'group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto': true,
      }"
    >
      <p
        class="text-center mb-6 text-sm leading-relaxed transform transition-transform duration-700 delay-100 font-light drop-shadow-md"
        :class="active ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'"
      >
        {{ description }}
      </p>

      <div
        class="flex gap-4 transform transition-transform duration-700 delay-200"
        :class="active ? 'translate-y-0' : 'translate-y-8 group-hover:translate-y-0'"
      >
        <!-- GitHub Button -->
        <a
          v-if="githubLink"
          :href="githubLink"
          target="_blank"
          rel="noopener noreferrer"
          @click="handleLinkClick"
          class="group/btn flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30 hover:scale-110 hover:rotate-1 hover:shadow-lg text-gray-900 font-semibold text-sm"
        >
          <svg
            class="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-12"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>GitHub</span>
        </a>

        <!-- Live Demo Button -->
        <a
          v-if="liveLink"
          :href="liveLink"
          target="_blank"
          rel="noopener noreferrer"
          @click="handleLinkClick"
          class="group/btn flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30 hover:scale-110 hover:-rotate-1 hover:shadow-lg text-gray-900 font-semibold text-sm"
        >
          <svg
            class="w-5 h-5 transition-transform duration-300 group-hover/btn:-rotate-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span>Live</span>
        </a>
      </div>
    </div>

    <!-- Decorative dots -->
    <div
      class="absolute top-4 right-4 w-3 h-3 bg-white bg-opacity-30 rounded-full transition-all duration-500"
      :class="active
        ? 'scale-150 bg-opacity-50 animate-pulse'
        : 'scale-100 group-hover:scale-150 group-hover:bg-opacity-50 group-hover:animate-pulse'"
    ></div>
    <div
      class="absolute bottom-4 left-4 w-2 h-2 bg-white bg-opacity-20 rounded-full transition-all duration-700 delay-100"
      :class="active
        ? 'scale-200 bg-opacity-40'
        : 'scale-100 group-hover:scale-200 group-hover:bg-opacity-40'"
    ></div>
  </div>
</template>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
