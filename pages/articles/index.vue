<script setup lang="ts">
import ArticleCardList from '../../components/article/ArtileCardList.vue';
const mockArticles = [
  {
    data: '2023-05-15',
    title: 'Getting Started with Vue 3',
    description: 'Learn the basics of Vue 3 composition API and build your first application',
    tags: ['Vue', 'JavaScript', 'Frontend']
  },
  {
    data: '2023-06-22',
    title: 'CSS Grid Layout Mastery',
    description: 'Comprehensive guide to mastering CSS Grid for modern web layouts',
    tags: ['CSS', 'Web Design', 'Layout']
  },
  {
    data: '2023-07-10',
    title: 'TypeScript Best Practices',
    description: 'Improve your TypeScript code with these industry best practices',
    tags: ['TypeScript', 'JavaScript', 'Best Practices']
  },
  {
    data: '2023-08-05',
    title: 'Building Responsive UIs',
    description: 'Techniques for creating responsive user interfaces that work on any device',
    tags: ['Responsive Design', 'UI', 'CSS']
  },
  {
    data: '2023-09-12',
    title: 'Web Performance Optimization',
    description: 'Learn how to optimize your web applications for maximum performance',
    tags: ['Performance', 'Optimization', 'Web']
  },
  {
    data: '2023-10-20',
    title: 'Introduction to Web Accessibility',
    description: 'Creating more accessible websites for all users',
    tags: ['Accessibility', 'a11y', 'Inclusive Design']
  },
  {
    data: '2023-11-15',
    title: 'Frontend Testing Strategies',
    description: 'Comprehensive approaches to testing your frontend applications',
    tags: ['Testing', 'Jest', 'Cypress']
  },
   {
    data: '2023-05-15',
    title: 'Getting Started with Vue 3',
    description: 'Learn the basics of Vue 3 composition API and build your first application',
    tags: ['Vue', 'JavaScript', 'Frontend']
  },
  {
    data: '2023-05-15',
    title: 'Getting Started with Vue 3',
    description: 'Learn the basics of Vue 3 composition API and build your first application',
    tags: ['Vue', 'JavaScript', 'Frontend']
  },
  {
    data: '2023-05-15',
    title: 'Getting Started with Vue 3',
    description: 'Learn the basics of Vue 3 composition API and build your first application',
    tags: ['Vue', 'JavaScript', 'Frontend']
  },
];
</script>

<template>
   <ArticleCardList :data="mockArticles" :quantity="9"/>
</template>

<style scoped>

</style>

