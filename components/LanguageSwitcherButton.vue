<script setup>
import { ref, onMounted } from "vue";

// Import all flag images directly
import frFlag from "@/assets/icons/flags/fr.svg";
import enFlag from "@/assets/icons/flags/en.svg";
import ruFlag from "@/assets/icons/flags/ru.svg";

const { locale, setLocale } = useI18n();
const availableLanguages = ["fr", "en", "ru"];
const currentLanguage = ref(locale.value);

// Map languages to their flag images
const flagImages = {
  fr: frFlag,
  en: enFlag,
  ru: ruFlag,
};

// Regions that should use Russian
const russianRegions = ['RU', 'BY'];
// Regions that should use French
const frenchRegions = ['FR'];

const switchLanguage = (lang) => {
  if (availableLanguages.includes(lang)) {
    currentLanguage.value = lang;
    setLocale(lang);
    localStorage.setItem("language", lang);
  }
};

const detectLanguageByRegion = async () => {
  try {
    // Try to get user's country from IP geolocation
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code;
    
    // Select language based on country
    if (russianRegions.includes(countryCode)) {
      return 'ru';
    } else if (frenchRegions.includes(countryCode)) {
      return 'fr';
    } else {
      return 'en'; // Default for rest of the world
    }
  } catch (error) {
    console.error('Error detecting region:', error);
    return 'en'; // Default fallback
  }
};

onMounted(() => {
  // Keep currentLanguage in sync with i18n locale
  currentLanguage.value = locale.value;
});
</script>

<template>
  <div class="language-switcher" :data-current-language="currentLanguage">
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
  </div>
</template>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  gap: 5px;
  border-radius: 24px;
  padding: 2px;
  border: 1px solid var(--language-switcher-border-color);

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
