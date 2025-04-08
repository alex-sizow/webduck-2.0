<script setup>
const { setLocale, locale } = useI18n();

const switchLanguage = (lang) => {
  setLocale(lang);
};
</script>

<template>
  <div>
    <button @click="switchLanguage('en')">English</button>
    <button @click="switchLanguage('ru')">Русский</button>
    <button @click="switchLanguage('fr')">Français</button>
  </div>
</template>

<style scoped></style>
