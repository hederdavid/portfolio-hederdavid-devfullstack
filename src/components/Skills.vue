<script setup>

const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  languages: {
    type: Array,
  },
  frameworks: {
    type: Array,
  },
  icon: {
    type: String,
  }
});
</script>

<template>
  <section class="flex flex-col items-center justify-center gap-6"
  >
    <div class="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
      <img
        :src="icon"
        alt="Ícone de Front-End"
        class="w-10 h-10"
      />
    </div>
    <div class="flex flex-col items-center gap-2 text-center">
      <h3 class="font-bold text-xl">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>

    <div class="flex flex-col items-center gap-6">
      <div class="flex flex-col items-center gap-2">
        <h4 class="text-primary font-bold">Linguagens</h4>
        <ul class="flex text-sm gap-1">
          <li v-for="(language, index) in languages" :key="index" class="bg-secondary px-2 py-1 rounded-full">
            {{ language }}
          </li>
        </ul>
      </div>

      <div class="flex flex-col items-center gap-2">
        <h4 class="text-primary font-bold">Frameworks e Bibliotecas</h4>
        <ul class="flex flex-col text-sm gap-2 items-center justify-center">
          <li v-for="(framework, index) in frameworks" :key="index" class="bg-secondary px-2 py-1 rounded-full">
            {{ framework }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
