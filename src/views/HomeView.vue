<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();

function increment() {
  counterStore.incrementCount();
}

function decrement() {
  counterStore.decrementCount();
}
</script>

<template>
  <div class="home">
    <h1 class="count">
      {{ counterStore.count }}
    </h1>
    <div class="buttons">
      <button class="button" @click="decrement">-</button>
      <button class="button" @click="increment">+</button>
    </div>
    <p class="odd-or-even">This counter is: {{ counterStore.oddOrEven }}</p>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
}

.count {
  margin: 0.375em 0;
  font-size: 4rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.button {
  width: 4rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #4e0078;
  color: #fafafa;
  transition: background-color 0.25s ease-in-out;
}

.button:hover {
  cursor: pointer;
  background-color: #4e0078be;
}

.odd-or-even {
  margin-top: 1em;
  font-size: 1.25rem;
}
</style>