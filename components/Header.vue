<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo">
      <img src="@/assets/icons/duck-logo.svg" alt="Logo" />
    </NuxtLink>
    <nav class="header__links">
      <NuxtLink to="/">Main</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/articles">Articles</NuxtLink>
      <NuxtLink to="/pomodoro">🍅</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: black;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  position: sticky;
  border-radius: 0 0 15px 15px;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 100;
  box-sizing: border-box;

  .header__logo {
    > img {
      width: 40px;
    }
  }

  .header__links {
    display: flex;
    gap: 20px;
  }
}
</style>
