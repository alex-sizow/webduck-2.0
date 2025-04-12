<script setup></script>

<template>
  <h1>{{ $t("welcome") }} <br />My name is Alex Sizov.</h1>
  <div class="intro">
    <img src="@/assets/images/i.webp" alt="" />
    <p class="intro__who">
      I’m a&nbsp;frontend developer in&nbsp;love with the&nbsp;Web, browsers,
      France, and technology
    </p>
  </div>
</template>

<style scoped>
.intro {
  width: 50%;
  background: var(--main-color);
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
