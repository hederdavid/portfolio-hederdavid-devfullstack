<script setup>
function redirectToWhatsApp() {
  const phoneNumber = '5577991607631'
  const message = 'Olá, gostaria de saber mais sobre seus projetos!'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
</script>

<template>
  <section class="flex flex-col items-center text-center">
    <div class="flex flex-col gap-2">
      <h2 class="text-tertiary font-bold text-2xl">Meus Projetos</h2>
      <p>
        Confira alguns dos projetos que trabalhei. Deseja conhecer mais?
        <span
          class="cursor-pointer text-primary relative hover:underline-animation font-semibold"
          @click="redirectToWhatsApp"
        >
          Entre em contato
        </span>
      </p>
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
