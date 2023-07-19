<script setup>
import { useCounterStore } from '@/stores/counter';

import Counter from '@/components/Counter.vue';

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
    <Counter />
    <div class="buttons">
      <button class="button" @click="decrement">-</button>
      <button class="button" @click="increment">+</button>
    </div>
    <p class="odd-or-even">This counter is: {{ counterStore.oddOrEven }}</p>
    <form class="form">
      <label for="counter">Edit Counter</label>
      <input type="number" v-model="counterStore.count" id="counter" min="0" step="1">
    </form>
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

.form label {
  display: block;
  margin-top: 1em;
  font-size: 1rem;
}
</style>