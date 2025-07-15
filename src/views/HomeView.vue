<script setup>
import AboutSection from '@/components/AboutSection.vue'
import AppHeader from '@/components/AppHeader.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <header class="m-6 container">
      <AppHeader />
    </header>

    <main class="flex flex-col gap-14 container">
      <HeroSection class="m-6" />
    </main>

    <AboutSection class="w-screen" />

    <main class="flex flex-col gap-14 container">
      <SkillsSection class="m-6" />
      <ProjectsSection class="m-6 mb-56" />
    </main>

    <footer>
      <Footer class="w-screen" />
    </footer>
  </div>
</template>
