<script setup>
import AboutSection from '@/components/AboutSection.vue';
import AppHeader from '@/components/AppHeader.vue'
import Contact from '@/components/Contact.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
</script>

<template>
  <div class="flex flex-col justify-center">
    <header class="m-6">
      <AppHeader />
    </header>

    <main class="flex flex-col gap-14 mb-100">
      <HeroSection class="m-6" />
      <AboutSection />
      <SkillsSection class="m-6" />
      <ProjectsSection class="m-6" />
      <Contact class="m-6" />
    </main>

    <footer>
      
    </footer>
  </div>
</template>
