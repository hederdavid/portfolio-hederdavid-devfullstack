<script setup>
import { ref, onMounted } from 'vue'

const titles = ['Desenvolvedor Front-end', 'Desenvolvedor Back-end', 'Desenvolvedor Full-Stack']

const displayedText = ref('')
let index = 0
let charIndex = 0
let isDeleting = false

onMounted(() => {
  const type = () => {
    const current = titles[index]
    displayedText.value = current.substring(0, charIndex)

    if (!isDeleting && charIndex < current.length) {
      charIndex++
    } else if (isDeleting && charIndex > 0) {
      charIndex--
    }

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => (isDeleting = true), 1000)
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      index = (index + 1) % titles.length
    }

    setTimeout(type, isDeleting ? 50 : 100)
  }

  type()
})
</script>

<template>
  <div class="flex flex-col items-center mt-14 px-4 gap-4 text-center">
    <h1 class="text-lg flex items-center gap-2">
      Olá, eu sou <span class="font-semibold text-[#1E40AF] text-2xl">Heder David!</span>
      <span class="text-2xl">👋</span>
    </h1>

    <h2 class="font-bold text-3xl sm:text-4xl h-10 text-tertiary">
      {{ displayedText }}<span class="animate-pulse">|</span>
    </h2>

    <p class="text-[1.1rem] max-w-md mt-10">Apaixonado por criar soluções eficientes e elegantes</p>

    <img class="w-3/4 max-w-sm animate-float mt-4" src="/hero.png" alt="Heder David" />

    <div class="flex gap-6 mt-6">
      <a href="https://linkedin.com/in/hederdavid" target="_blank" rel="noopener noreferrer">
        <img
          src="../../src/components/icons/linkedin.svg"
          alt="Ícone LinkedIn"
          class="social-icon linkedin-icon"
        />
      </a>
      <a href="https://github.com/hederdavid" target="_blank" rel="noopener noreferrer">
        <img
          src="../../src/components/icons/github.svg"
          alt="Ícone GitHub"
          class="social-icon github-icon"
        />
      </a>
      <a href="https://heder.tech/hederdavid" target="_blank" rel="noopener noreferrer">
        <img
          src="../../src/components/icons/curriculum.svg"
          alt="Ícone Currículo"
          class="social-icon curriculum-icon"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.social-icon {
  width: 56px;
  height: 56px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-icon:hover {
  transform: translateY(-5px);
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.08);
}

.github-icon:hover {
  animation: rotate-wiggle 1.2s ease-in-out infinite;
  border: 2px solid #181717;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  filter: brightness(1.2) contrast(1.1);
  transform: rotate(0deg);
}

.linkedin-icon:hover {
  animation: rotate-wiggle 1.2s ease-in-out infinite;
  border: 2px solid #0077b5;
  box-shadow: 0 0 18px rgba(0, 119, 181, 0.4);
  filter: brightness(1.2) contrast(1.1);
  transform: rotate(0deg);
}

.curriculum-icon:hover {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  animation: rotate-wiggle 1.2s ease-in-out infinite;
  border-color: #f59e0b;
  filter: brightness(1.2) contrast(1.1);
}

@keyframes rotate-wiggle {
  0%,
  100% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(-10deg) scale(1.1);
  }
  75% {
    transform: rotate(10deg) scale(1.1);
  }
}
</style>
