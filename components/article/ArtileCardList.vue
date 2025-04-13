<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  data: Array<{
    data: string;
    title: string;
    description: string;
    tags: string[];
  }>;
}>();

const displayedArticles = computed(() => {
  return props.data.slice(0, 6);
});
</script>

<template>
  <section class="article-card-list">
    <div 
      v-for="(article, index) in displayedArticles" 
      :key="index" 
      class="article-card"
    >
      <h3 class="article-card__title">{{ article.title }}</h3>
      <div class="article-card__date">{{ article.data }}</div>
      
      <p class="article-card__description">{{ article.description }}</p>
      <div class="article-card__tags">
        <span 
          v-for="(tag, tagIndex) in article.tags" 
          :key="tagIndex" 
          class="article-card__tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.article-card-list {
    padding: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.article-card {
  min-width: 300px;
  max-width: 500px;
  height: 300px;
  width: 100%;
  background-color: var( --main-color);
  padding: 10px;
  border-radius: 10px;
}

.article-card__date {
  /* Empty for now */
}

.article-card__title {
 font-size: 30px;
}

.article-card__description {
  /* Empty for now */
}

.article-card__tags {
  /* Empty for now */
}

.article-card__tag {
  /* Empty for now */
}
</style>
