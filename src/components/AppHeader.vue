<script setup>
import MobileNavigation from './MobileNavigation.vue'
import { ref } from 'vue'

const openMobileMenu = ref(false)

function fecharMenu() {
  openMobileMenu.value = false
}
</script>

<template>
  <div class="flex justify-between items-center mx-6">
    <img class="w-14" src="/dev-icon.svg" alt="Ícone de Desenvolvedor" />
    <div class="lg:block md:block hidden">
      <button

        class="font-semibold group cursor-pointer flex items-center border-2 px-6 py-2 rounded-4xl border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg"
      >
        Vamos Conversar
        <svg
          class="fill-primary group-hover:fill-white ml-2"
          width="24"
          height="24"
          viewBox="0 0 750 750"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
          <g id="SVGRepo_iconCarrier">
            <path
              d="M579.8,262.36c-21.01-32.85-48.56-64-85.08-79.51-32.92-12.22-68.82-11.21-103.17-6.92-39.92,2.23-81.66,11.38-112.66,38.1-53.03,42.04-48.65,113.26-55.59,173.89-20.93,9.38-42.49,17.32-63.79,25.81-10.09,4.59-25.96,7.34-25.87,21.24-18.27-4.44-22.04,19.75-7.52,22.85,34.11,.19,69.15,1.33,102.22,10.08,21.13,72.29,99.37,113.09,171.56,108.81,45.54-.22,89.96-12.38,130.81-32.13,45.07-18.37,92.37-49.83,100.9-101.32,6.26-63.99-13.86-129.39-51.83-180.91Zm-54.39,265.77c-33.32,16.79-70.99,13.21-107.1,13.32-66.37,1.53-131.34-.13-161.48-70.33-10.89-44.01-28.46-37.84-67.69-37.74,15.4-7.21,32.34-12.21,46.45-21.69,25.31-36.76-.71-90.24,18.6-130.64,15.33-33.81,54.09-49.05,86.23-62.89,37.19-16.36,79.01-18.5,117.9-7.07,35.38,7.28,70.39,21.58,96.32,47.39,40.07,39.08,52.35,98.14,52.59,152.31,5.12,52.58-37.73,95.8-81.82,117.34Z"
            />
            <ellipse cx="372.82" cy="324" rx="10.69" ry="14.06" />
            <path
              d="M460.56,327.08c7.07,0,10.68-7.98,10.68-14.05s-3.6-14.05-10.68-14.05-10.68,7.98-10.68,14.05,3.6,14.05,10.68,14.05Z"
            />
            <path
              d="M501.99,349.96c-8.15,.66-11.32,10.32-16.83,15.26-14.77,22.38-38.26,29.84-63.98,24.87-20.34-.31-34.45-9.62-49.34-22.17-13.37-6.45-19.58,15.06-11.5,23.35,13.79,19.12,36.75,28.05,59.83,28.23,21.31,2.17,43.99-.16,61.08-14.28,11.49-11.06,50.4-45.11,20.74-55.25Z"
            />
          </g>
        </svg>
      </button>
    </div>
    <img
      class="w-5 lg:hidden md:hidden"
      src="../components/icons/hamburger-menu.svg"
      alt="Ícone de Menu"
      @click="openMobileMenu = !openMobileMenu"
    />
  </div>

  <!-- Escuta o evento close emitido pelo MobileNavigation e fecha o menu -->
  <MobileNavigation v-if="openMobileMenu" @close="fecharMenu" />
</template>

<style scoped>
button {
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

button svg {
  transition: fill 0.3s ease;
}
</style>
