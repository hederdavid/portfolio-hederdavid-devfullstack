<script setup>
import AboutSection from '@/components/AboutSection.vue';
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
</script>

<template>
  <div class="container flex flex-col justify-center">
    <header class="m-6">
      <AppHeader />
    </header>

    <main class="flex flex-col gap-14 mb-100">
      <HeroSection class="m-6" />
      <AboutSection />
      <SkillsSection />
    </main>
  </div>
</template>
