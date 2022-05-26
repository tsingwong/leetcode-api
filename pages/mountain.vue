<template>
  <div>
    <p>Fetched from {{ mountains }}</p>
  </div>
</template>

<script setup lang="ts">
  const mountains = await useAsyncData("mountains", () => $fetch("/api/mountain"))
</script>

<style scoped></style>
