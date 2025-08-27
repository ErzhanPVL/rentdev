// stores/counterStore.ts
import { makeAutoObservable, reaction } from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    // Initialize count from sessionStorage 'cart' array length
    const cartRaw = sessionStorage.getItem("cart");

    try {
      const cart = cartRaw ? JSON.parse(cartRaw) : [];
      this.count = Array.isArray(cart) ? cart.length : 0;
    } catch {
      this.count = 0;
    }

    makeAutoObservable(this);

    // Optionally sync count to sessionStorage or elsewhere here if needed
  }

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) this.count--;
  }

  setCount(newCount) {
    this.count = newCount;
  }
}

const counterStore = new CounterStore();
export default counterStore;
