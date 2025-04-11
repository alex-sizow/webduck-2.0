declare module '#app' {
    interface NuxtApp {
        $markdown: (text: string) => string;
    }
} 