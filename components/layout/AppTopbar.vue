<script setup>
const { layoutConfig, onMenuToggle } = useLayout()

const outsideClickListener = ref(null)
const topbarMenuActive = ref(false)
const router = useRouter()

onMounted(() => {
  bindOutsideClickListener()
})

onBeforeUnmount(() => {
  unbindOutsideClickListener()
})

const logoUrl = computed(() => {
  return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`
})

function onTopBarMenuButton() {
  topbarMenuActive.value = !topbarMenuActive.value
}
function onSettingsClick() {
  topbarMenuActive.value = false
  router.push('/documentation')
}
const topbarMenuClasses = computed(() => {
  return {
    'layout-topbar-menu-mobile-active': topbarMenuActive.value,
  }
})

function bindOutsideClickListener() {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event))
        topbarMenuActive.value = false
    }
    document.addEventListener('click', outsideClickListener.value)
  }
}
function unbindOutsideClickListener() {
  if (outsideClickListener.value) {
    document.removeEventListener('click', outsideClickListener)
    outsideClickListener.value = null
  }
}
function isOutsideClicked(event) {
  if (!topbarMenuActive.value)
    return

  const sidebarEl = document.querySelector('.layout-topbar-menu')
  const topbarEl = document.querySelector('.layout-topbar-menu-button')

  return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target))
}
</script>

<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <img :src="logoUrl" alt="logo">
      <span>SAKAI</span>
    </router-link>

    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
      <i class="pi pi-bars" />
    </button>

    <button class="p-link layout-topbar-button layout-topbar-menu-button" @click="onTopBarMenuButton()">
      <i class="pi pi-ellipsis-v" />
    </button>

    <div class="layout-topbar-menu" :class="topbarMenuClasses">
      <button class="p-link layout-topbar-button" @click="onTopBarMenuButton()">
        <i class="pi pi-calendar" />
        <span>Calendar</span>
      </button>
      <button class="p-link layout-topbar-button" @click="onTopBarMenuButton()">
        <i class="pi pi-user" />
        <span>Profile</span>
      </button>
      <button class="p-link layout-topbar-button" @click="onSettingsClick()">
        <i class="pi pi-cog" />
        <span>Settings</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
