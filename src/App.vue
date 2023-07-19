<template>
  <nav class="nav">
    <ul class="nav-items">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>

  <RouterView />
</template>

<style scoped>
.nav-items {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
</style>

