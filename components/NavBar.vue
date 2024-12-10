<template>
  <nav class="navbar" aria-label="Main Navigation">
    <div class="navbar__container">
      <h1 class="navbar__title">
        <nuxt-link to="/">Hacker News Viewer</nuxt-link>
      </h1>
      <ul class="navbar__links">
        <li class="navbar__item">
          <nuxt-link to="/" active-class="navbar__link--active" exact>Home</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/stories" active-class="navbar__link--active" exact>Stories</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
/* Navbar Block */
.navbar {
  color: #244164;
  padding: 1rem 0;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
}

/* Navbar Container */
.navbar__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Navbar Title */
.navbar__title {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Navbar Links */
.navbar__links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.navbar__item {
  display: inline-block;
}

.navbar__link {
  color: #244164;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.navbar__link:hover {
  color: #0e1b2b;
}

.navbar__link--active {
  font-weight: bold;
  text-decoration: underline;
}
</style>