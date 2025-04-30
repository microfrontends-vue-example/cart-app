<template>
  <div class="cart">
    <h2>Корзина</h2>

    <ul v-if="items.length > 0">
      <li v-for="item in items" :key="item.id">
        {{ item.title }} (Кількість: {{ item.quantity }})
        <button @click="removeItem(item.id)">Видалити</button>
      </li>
    </ul>

    <p v-else>Корзина порожня</p>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from 'mainApp/stores'  // Імпортуємо зі спільного стора Host'а
import { storeToRefs } from 'pinia'            // Для реактивного доступу до state

// Ініціалізація стора
const cartStore = useCartStore()

// Реактивна деструктуризація
const { items } = storeToRefs(cartStore)

// Метод видалення товару
function removeItem(id: string) {
  cartStore.removeItem(id)
}
</script>

<style scoped>
.cart {
  padding: 20px;
}
.cart ul {
  list-style: none;
  padding: 0;
}
.cart li {
  margin-bottom: 10px;
}
</style>