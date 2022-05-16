<template>
  <div>
    <p>Fetched from <pre>/api/mountain</pre>: {{ mountains }}</p>

  </div>
</template>

<script setup lang="ts">

  const mountains = await useAsyncData("mountains",  () =>$fetch("/api/mountain"))
  console.log(mountains)
</script>

<style scoped>

</style>
