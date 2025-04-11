<script setup lang="ts">


const { data } = await useFetch<string>('/api/about');
const { $markdown } = useNuxtApp() as unknown as { $markdown: (text: string) => string };
</script>

<template>
    <div>
        <h1>About</h1>
      
        <div class="markdown-content" v-html="$markdown(data|| '')"></div>
    </div>
</template> 

<style scoped>

</style>

