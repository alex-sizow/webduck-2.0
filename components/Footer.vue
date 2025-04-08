<script setup lang="ts">
const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="footer">
    <div class="footer-section">
      <h3>Links</h3>
      <ul>
        <li>
          <a href="https://x.com/AlexSizow" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://t.me/sizifalex" target="_blank">Telegram</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alex-sizow/" target="_blank"
            >LinkedIn</a
          >
        </li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Email</h3>
      <p>
        <a href="alex_sizow@outlook.com">alex_sizow@outlook.com</a>
      </p>
    </div>
    <div class="footer-section">
      <h3>Credits</h3>
      <ul>
        <li><a href="#">Handcrafted by me</a></li>
        <li><a href="#">Designed by Alex Sizov</a></li>
        <li><a href="#">Powered by Duck</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 15px 15px 0 0;
  border-top: 1px solid #ccc;
}

.footer-section {
  text-align: center;
}

.footer-section h3 {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 5px;
}

.footer-section a {
  text-decoration: none;
  color: #333;
}

.footer-section a:hover {
  text-decoration: underline;
}
</style>
