<template>
  <div class="cart-component">
    <ul v-if="items.length > 0">
      <li v-for="item in items" :key="item.id" class="cart-item">
        {{ item.title }} (Quantity: {{ item.quantity }})
        <button @click="removeItem(item.id)">Remove</button>
      </li>
    </ul>
    <p v-else>The cart is empty</p>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from 'mainApp/stores'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()

const { items } = storeToRefs(cartStore)

function removeItem(id: string) {
  cartStore.removeItem(id)
}
</script>

<style scoped>
.cart ul {
  width: 100%;
  list-style: none;
  padding: 0;
}
.cart li {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>