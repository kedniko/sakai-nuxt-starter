<script setup>
</script>

<template>
  <div class="surface-ground align-items-center justify-content-center min-h-screen min-w-screen flex overflow-hidden">
    <div class="flex-column align-items-center justify-content-center flex">
      <img src="/demo/images/error/logo-error.svg" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0">
      <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%)">
        <div class="surface-card flex-column align-items-center w-full flex px-5 py-8 sm:px-8" style="border-radius: 53px">
          <div class="flex-column align-items-center grid flex">
            <div class="justify-content-center align-items-center border-circle flex bg-pink-500" style="height: 3.2rem; width: 3.2rem">
              <i class="pi pi-fw text-2xl pi-exclamation-circle text-white" />
            </div>
            <h1 class="mb-2 text-900 font-bold text-5xl">
              Error Occured
            </h1>
            <span class="mb-5 text-600">Requested resource is not available.</span>
            <img src="/demo/images/error/asset-error.svg" alt="Error" class="mb-5" width="80%">
            <div class="col-12 mt-5 text-center">
              <i class="pi pi-fw pi-arrow-left mr-2 text-blue-500" style="vertical-align: center" />
              <router-link to="/" class="text-blue-500">
                Go to Dashboard
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppConfig simple />
</template>
