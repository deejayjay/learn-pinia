<script setup>
import { ref, computed } from 'vue';

const count = ref(0);

const oddOrEven = computed(() => {
  if (count.value === 0) return "neither even nor odd";
  if (count.value % 2 === 0) return "even";
  return "odd";
});

function increment() {
  count.value++;
}

function decrement() {
  if (count.value === 0) return;
  count.value--;
}
</script>

<template>
  <div class="home">
    <h1 class="count">
      {{ count }}
    </h1>
    <div class="buttons">
      <button class="button" @click="decrement">-</button>
      <button class="button" @click="increment">+</button>
    </div>
    <p class="odd-or-even">This counter is: {{ oddOrEven }}</p>
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