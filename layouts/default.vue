<template>
  <div class="layout">
    <NavBar />
    <main class="layout__content">
      <slot />
    </main>
    <footer class="layout__footer">
      <p>&copy; 2024 Hacker News Viewer</p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__content {
  flex: 1;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.layout__footer {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #777;
  border-top: 1px solid #ddd;
  padding: 1rem 0;
  background-color: #f9f9f9;
}
</style>