<script setup>
import Skills from './Skills.vue'
import frontEndIcon from '@/components/icons/front-end-icon.svg'
import backEndIcon from '@/components/icons/back-end-icon.svg'

const skills = [
  {
    title: 'Desenvolvedor Front End',
    description: 'Transformar ideias em experiências interativas é onde a mágica acontece.',
    languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    frameworks: ['Vue.js', 'Angular', 'Quasar', 'TailwindCSS'],
    icon: frontEndIcon,
  },
  {
    title: 'Desenvolvedor Back End',
    description: 'Construindo a lógica por trás das aplicações, garantindo eficiência e segurança.',
    languages: ['TypeScript', 'Java'],
    frameworks: ['NodeJs', 'NestJs', 'Spring Boot', 'Prisma', 'PostgreSQL', 'MySQL', 'MongoDB'],
    icon: backEndIcon,
  },
]
</script>

<template>
  <section
    class="flex flex-col lg:flex-row lg:items-start justify-center items-center gap-10 mt-[-10rem] border-2 rounded-2xl mx-6 border-blue-100 bg-white p-6 py-20 shadow-md"
  >
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
