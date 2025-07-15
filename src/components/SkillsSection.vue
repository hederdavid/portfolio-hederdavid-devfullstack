<script setup>
import Skills from './Skills.vue'

const skills = [
  {
    title: 'Desenvolvedor Front End',
    description: 'Transformar ideias em experiências interativas é onde a mágica acontece.',
    languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    frameworks: ['Vue.js', 'Angular', 'Quasar', 'TailwindCSS'],
    icon: '../../../src/components/icons/front-end-icon.svg',
  },
  {
    title: 'Desenvolvedor Back End',
    description: 'Construindo a lógica por trás das aplicações, garantindo eficiência e segurança.',
    languages: ['TypeScript', 'Java'],
    frameworks: ['NodeJs', 'NestJs', 'Spring Boot', 'Prisma', 'PostgreSQL', 'MySQL', 'MongoDB'],
    icon: '.../../../src/components/icons/back-end-icon.svg',
  },
]
</script>

<template>
  <section class="flex flex-col items-center mt-[-10rem] border-2 rounded-2xl mx-6 border-blue-100 bg-white p-6 gap-20 py-20">
    <Skills
      v-for="(skill, index) in skills"
      :key="index"
      :title="skill.title"
      :description="skill.description"
      :languages="skill.languages"
      :frameworks="skill.frameworks"
      :icon="skill.icon"
    />
  </section>
</template>

<style scoped></style>
