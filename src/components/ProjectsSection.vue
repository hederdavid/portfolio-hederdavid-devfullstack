<script setup>
import ProjectCard from './ProjectCard.vue'

function redirectToWhatsApp() {
  const phoneNumber = '5577991607631'
  const message = 'Olá, gostaria de saber mais sobre seus projetos!'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

const projects = [
  {
    title: 'Bookmark',
    description: 'Landing page para um serviço de gerenciamento de favoritos',
    color: 'from-blue-500 to-indigo-600', // gradiente azul
    githubLink: 'https://github.com/hederdavid/book-mark-landing-page',
    liveLink: 'https://book-mark-landing-page-pearl.vercel.app/',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    color: 'from-green-400 to-teal-500', // gradiente verde
    githubLink: 'https://github.com/hederdavid/book-mark-landing-page',
    liveLink: '',
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3',
    color: 'from-red-400 to-pink-500', // gradiente vermelho/rosa
    githubLink: '',
    liveLink: 'https://book-mark-landing-page-pearl.vercel.app/',
  },
]
</script>

<template>
  <section class="flex flex-col items-center justify-center text-center">
    <div class="lg:mb-12 flex flex-col gap-2 mb-6">
      <h2 class="lg:text-3xl text-tertiary font-bold text-2xl">Meus Projetos</h2>
      <p class="lg:text-xl">
        Confira alguns dos projetos que trabalhei. Deseja conhecer mais?
        <span
          class="cursor-pointer text-primary relative hover:underline-animation font-semibold"
          @click="redirectToWhatsApp"
        >
          Entre em contato
        </span>
      </p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4 justify-items-center"
    >
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :color="project.color"
        :githubLink="project.githubLink"
        :liveLink="project.liveLink"
      />
    </div>
  </section>
</template>

<style scoped>
.hover\:underline-animation::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition:
    width 0.3s ease-in-out,
    left 0.3s ease-in-out;
}

.hover\:underline-animation:hover::after {
  width: 100%;
  left: 0;
}
</style>
