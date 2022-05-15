<script setup lang="ts">
definePageMeta({
  layout: "custom"
})
</script>

<template>
  <div class="p-4">
    Custom layout defined with <code>definePageMeta</code>
    <br>
    <NuxtLink to="/">
      Back to home
    </NuxtLink>
  </div>
</template>