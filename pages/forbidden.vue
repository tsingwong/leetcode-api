<template>
  <div>Forbidden</div>
</template>

<script setup lang="ts">
definePageMeta({
  // This is an example of inline middleware
  middleware: () => {
    console.log('Strictly forbidden.');
    return false;
  },
});
</script>
