<script setup lang="ts">

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 100;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  checkScroll();
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <button 
    class="scroll-button"
    :style="{ opacity: isVisible ? 1 : 0, visibility: isVisible ? 'visible' : 'hidden', transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }"
    @click="scrollToTop"
    aria-label="Scroll to top"
  >
    ↑
  </button>
</template>

<style scoped>
.scroll-button {
  position: fixed;
  bottom: 20px;
  left: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  color: var(--color-background);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 199;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: green;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &--visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
</style>
