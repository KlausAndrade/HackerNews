<template>
  <section class="intro">
    <div class="intro__content">
      <h1>Hello, I'm Klaus</h1>
      <p>
        I'm a senior software engineer based in Copenhagen, Denmark. This project demonstrates my skills in building responsive and user-friendly web applications.
      </p>
      <p>
        In this assignment, I developed a web page that interacts with the Hacker News API to display top stories. The page features a responsive design (BEMCSS), infinite scrolling, accessibility enhancements and few tests using vitest, all implemented using Nuxt and TypeScript.
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.intro {
  margin: 2rem auto;
  max-width: 800px;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

.intro__content {
  text-align: center;
}

.intro h1 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.intro p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #333;
}
</style>