<script setup lang="ts">
const reloads = useState('reload', () => 0);
onMounted(() => {
  reloads.value++;
});
</script>

<template>
  current param id : {{ $route.params.id }}
  <div>Child reloaded: {{ reloads }}</div>
</template>
