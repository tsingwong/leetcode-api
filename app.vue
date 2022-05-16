<script setup>
  const version = 2 + 1
  const route = useRoute()
</script>
<template>
  <NuxtLayout name="default">
    <nav class="flex align-center gap-4 p-4">
      <MyNuxtLink to="/"> Index</MyNuxtLink>
      <NuxtLink to="/default"> Default </NuxtLink>
      <NuxtLink to="/forbidden"> Forbidden </NuxtLink>
      <NuxtLink to="/redirect"> Redirect </NuxtLink>
      <NuxtLink to="/parent"> Parent </NuxtLink>
      <button @click="$router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`)">Keyed child</button>
      <button @click="$router.push(`/parent/static-${(Math.random() * 100).toFixed()}`)">Non-keyed child</button>
    </nav>
    <NuxtPage />
    <div class="text-center p-4 op-50">
      current route : <code>{{ route.path }}</code>
    </div>
  </NuxtLayout>
</template>
