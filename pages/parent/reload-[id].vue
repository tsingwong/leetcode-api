<script setup lang="ts">
  const reloads = useState("reload", () => 0)
  onMounted(() => {
    reloads.value++
  })
</script>

<template>
  <div>
    current param id : {{ $route.params.id }}
    <div>Child reloaded: {{ reloads }}</div>
  </div>
</template>
