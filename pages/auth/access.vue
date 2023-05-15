<script setup>
</script>

<template>
  <div class="surface-ground align-items-center flex justify-content-center min-h-screen min-w-screen overflow-hidden">
    <div class="align-items-center justify-content-center flex flex-column">
      <img src="/demo/images/access/logo-orange.svg" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0">
      <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)">
        <div class="surface-card flex-column align-items-center w-full flex px-5 py-8 sm:px-8" style="border-radius: 53px">
          <div class="flex-column align-items-center grid flex">
            <div class="justify-content-center align-items-center flex border-circle bg-orange-500" style="width: 3.2rem; height: 3.2rem">
              <i class="pi pi-fw pi-lock text-2xl text-50" />
            </div>
            <h1 class="text-900 mb-2 text-4xl font-bold lg:text-5xl">
              Access Denied
            </h1>
            <span class="mb-5 text-600">You do not have the necessary permisions. Please contact admins.</span>
            <img src="/demo/images/access/asset-access.svg" alt="Access denied" class="mb-5" width="80%">
            <div class="col-12 mt-5 text-center">
              <i class="pi pi-fw mr-2 pi-arrow-left text-blue-500" style="vertical-align: center" />
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
