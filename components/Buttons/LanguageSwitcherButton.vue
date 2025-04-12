<script setup lang="ts">

// Import all flag images directly
import frFlag from "@/assets/icons/flags/fr.svg";
import enFlag from "@/assets/icons/flags/en.svg";
import ruFlag from "@/assets/icons/flags/ru.svg";


type Language = "fr" | "en" | "ru";

const i18n = useI18n();
const availableLanguages: Language[] = ["fr", "en", "ru"];

// Use computed property to always stay in sync with i18n
const currentLanguage = computed<Language>({
  get: () => i18n.locale.value as Language,
  set: (value) => {
    i18n.locale.value = value;
    localStorage.setItem("language", value);
  }
});

const flagImages: Record<Language, string> = {
  fr: frFlag,
  en: enFlag,
  ru: ruFlag,
};

const switchLanguage = (lang: Language): void => {
  if (availableLanguages.includes(lang)) {
    currentLanguage.value = lang;
  }
};

onMounted(() => {
  const savedLanguage = localStorage.getItem("language") as Language;
  if (savedLanguage && availableLanguages.includes(savedLanguage)) {
    currentLanguage.value = savedLanguage;
  }
});
</script>

<template>
  <section class="language-switcher" :data-current-language="currentLanguage">
    <button
      v-for="lang in availableLanguages"
      :key="lang"
      :value="lang"
      :aria-pressed="currentLanguage === lang"
      @click="switchLanguage(lang)"
    >
      <img :src="flagImages[lang]" :alt="lang" />
    </button>
    <div class="language-switcher__status"></div>
  </section>
</template>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  gap: 5px;
  border-radius: 24px;
  padding: 2px;
  border: 2px solid var(--language-switcher-border-color);

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    height: 25px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 1;
    transition: opacity 0.2s;
    opacity: 0.7;

    img {
      width: 30px;
      height: 25px;
      border-radius: 50%;
      object-fit: cover;
      display: block;
    }

    &[aria-pressed="true"] {
      opacity: 1;
    }
  }

  .language-switcher__status {
    position: absolute;
    inset: 2px;
    z-index: 0;
    width: 28px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--theme-switcher-back, white);
    pointer-events: none;
    transition: transform 0.3s ease;
  }

  &[data-current-language="fr"] .language-switcher__status {
    transform: translateX(1px);
  }

  &[data-current-language="en"] .language-switcher__status {
    transform: translateX(calc(36px));
  }

  &[data-current-language="ru"] .language-switcher__status {
    transform: translateX(calc(2 * (35.5px)));
  }
}
</style>
