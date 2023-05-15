<script setup>
const { layoutConfig } = useLayout()

const logoUrl = computed(() => {
  return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`
})
</script>

<template>
  <div class="layout-footer">
    <img :src="logoUrl" alt="Logo" height="20" class="mr-2">
    by
    <span class="ml-2 font-medium">PrimeVue</span>
  </div>
</template>

<style lang="scss" scoped></style>
