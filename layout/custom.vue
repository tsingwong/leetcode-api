<script setup lang="ts">
  console.log("layout created")
</script>
<template>
  <div>
    <strong>Custom layout</strong>
    <slot name="header"> Default slot content for <code>Custom</code> layout </slot>
  </div>
</template>

<style scoped></style>
