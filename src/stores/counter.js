import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  actions: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      if (this.count === 0) return;
      this.count--;
    }
  },
  getters: {
    oddOrEven(state) {
      if (state.count === 0) return 'neither even nor odd';
      if (state.count % 2 === 0) return 'even';
      return 'odd';
    }
  }
});
