<template>
  <div>
    <p>Named export <code>useA</code> : {{ a }}</p>
    <p>Named export <code>useB</code> : {{ b }}</p>
    <p>Named export <code>useC</code> : {{ c }}</p>
    <p>Named export <code>useD</code> : {{ d }}</p>
    <p>Default export <code>useFoo</code> : {{ foo }}</p>
    <!-- <a-input v-model:value="foo"></a-input> -->
  </div>
</template>

<script setup lang="ts">
  const a = useA()
  const b = useB()
  const c = useC()
  const d = useD()
  const foo = useFoo()
</script>

<style scoped></style>
