<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>


<template>
  <h1 class="count">
    {{ counterStore.count }}
  </h1>
</template>

