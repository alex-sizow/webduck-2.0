<script setup lang="ts">
import { ref, onMounted } from 'vue';

type Theme = 'light' | 'system' | 'dark';

const currentTheme = ref<Theme>('system');

const setTheme = (theme: Theme) => {
  currentTheme.value = theme;
  
  if (theme === 'system') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  
  if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
    currentTheme.value = savedTheme;
    setTheme(savedTheme);
  } else {
    currentTheme.value = 'system';
  }
});
</script>

<template>
  <section class="theme-switcher">
    <button 
      class="theme-switcher__button" 
      @click="setTheme('light')"
      :aria-pressed="currentTheme === 'light'"
      value="light">☀️</button>
    <button 
      class="theme-switcher__button" 
      @click="setTheme('system')"
      :aria-pressed="currentTheme === 'system'"
      value="system">🌗</button>
    <button 
      class="theme-switcher__button" 
      @click="setTheme('dark')"
      :aria-pressed="currentTheme === 'dark'"
      value="dark">🌛</button>
    <div class="theme-switcher__status"></div>
  </section>
</template>

<style scoped>
.theme-switcher {
  --theme-switcher-hover-back: var(--color-primary);
  --theme-switcher-hover-text: var(--color-background);
  z-index: 1;
  border: 2px solid var(--theme-switcher-back);
  border-radius: 24px;
  height: 25px;
  grid-template-columns: repeat(3, 1fr);
  padding: 2px;
  display: inline-grid;
  position: relative;
}

.theme-switcher__button {
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 24px;
  background-color: transparent;
  color: var(--theme-switcher-back);
  line-height: inherit;
  font-size: 23px;
  font-family: inherit;
  transition: color 0.1s linear 0.1s;

  &[aria-pressed="true"] {
    outline-offset: 2px;
    color: var(--theme-switcher-text);
  }

  @media (hover: hover) and (pointer: fine) {
    &[aria-pressed="false"]:hover {
      animation: menu-button 0.2s both;
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
}

@keyframes menu-button {
  to {
    background-color: var(--theme-switcher-hover-back);
    color: var(--theme-switcher-hover-text);
  }
}

/* Status */

.theme-switcher__status {
  position: absolute;
  inset: 2px;
  z-index: -1;
  margin-inline: auto;
  width: calc(33% - 0.5px);
  border-radius: 24px;
  background-color: var(--theme-switcher-back);
  pointer-events: none;
  transform: translateX(0);
  transition: transform 0.2s;

  .theme-switcher__button[aria-pressed="true"][value="light"] ~ & {
    transform: translateX(-100%);
  }

  .theme-switcher__button[aria-pressed="true"][value="dark"] ~ & {
    transform: translateX(100%);
  }
}
</style>
