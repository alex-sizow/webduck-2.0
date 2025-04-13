<script setup lang="ts">
import ArticleCardList from '../components/article/ArtileCardList.vue';

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
  }
];
</script>

<template>
  <h1>{{ $t("welcome") }} <br />My name is Alex Sizov.</h1>
  <div class="intro">
    <img src="@/assets/images/i.webp" alt="" />
    <p class="intro__who">
      I'm a&nbsp;frontend developer in&nbsp;love with the&nbsp;Web, browsers,
      France, and technology
    </p>
  </div>
 <ArticleCardList :data="mockArticles" />
 
</template>

<style scoped>
.intro {
  width: 50%;
  background: var(  );
  position: relative;
  border-radius: 20px;
  img {
    position: relative;
    top: 2px;
    width: 100%;
    border-radius: 20px;
    min-height: 100%;
    filter: grayscale(100%);
    transition: all 1s ease !important;
    transition: filter 0.5s ease-in-out;

  }

  .intro__who {
    transition: left 1s ease !important;
    position: absolute;
    width: 100%;
    font-size: 3.5vw;
    top: 30%;
    left: 80%;
    user-select: none;
  }
}

.intro:hover {
  > img {
    transition: all 1s ease !important;
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
  }

  .intro__who {
    transition: left 1s ease !important;
    left: 90%;
  }
}
</style>
