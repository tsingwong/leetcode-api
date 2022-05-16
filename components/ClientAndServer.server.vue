<template>
  <div>
    Loading width... (server fallback)
    <a-rate :value="2" disabled />
    <slot />
  </div>
</template>

<script setup lang="ts">
  console.log("Hi from Server Component!")
</script>
