<script setup>
  const version = 2 + 1
</script>
<template>
  <div>
    Hello Nuxt {{ version }}
    <a-button>Here we are</a-button>
    <a-button type="primary">Primary Button</a-button>

    <nav class="flex align-center gap-4 p-4">
      <NuxtLink to="/default"> Default layout </NuxtLink>
    </nav>

    <NuxtWelcome />
  </div>
</template>
