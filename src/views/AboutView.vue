<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();

</script>

<template>
  <div class="about">
    <h1>About</h1>
    <button class="btn-counter" @click="counterStore.incrementCount">
      {{ counterStore.count }}
    </button>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
}

h1 {
  margin: 1rem 0;
  font-size: 3rem;
}

.btn-counter {
  width: 4rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #4e0078;
  color: #fafafa;
  transition: background-color 0.25s ease-in-out;
}

.btn-counter:hover {
  cursor: pointer;
  background-color: #4e0078be;
}
</style>