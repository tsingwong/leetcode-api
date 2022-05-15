export default defineNuxtRouteMiddleware((to) => {
  const { $config } = useNuxtApp();
  if ($config) {
    console.log($config);
  }
  console.log('Heading to ', to.path);
  return '/secret';
});
