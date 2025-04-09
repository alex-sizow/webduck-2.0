export default defineNuxtPlugin(async ({ $i18n }) => {

    if (process.client) {
        const savedLang = localStorage.getItem('language');
        if (savedLang && ['en', 'fr', 'ru'].includes(savedLang)) {
            $i18n.setLocale(savedLang);
            return;
        }
    }

    const russianRegions = ['RU', 'BY'];

    const frenchRegions = ['FR'];

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;

        let detectedLocale;
        if (russianRegions.includes(countryCode)) {
            detectedLocale = 'ru';
        } else if (frenchRegions.includes(countryCode)) {
            detectedLocale = 'fr';
        } else {
            detectedLocale = 'en';
        }

        $i18n.setLocale(detectedLocale);


        if (process.client) {
            localStorage.setItem('language', detectedLocale);
        }
    } catch (error) {
        console.error('Error detecting region:', error);
        $i18n.setLocale('en');
    }
}); 