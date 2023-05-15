<script setup>
</script>

<template>
  <div class="surface-ground align-items-center justify-content-center min-h-screen min-w-screen flex overflow-hidden">
    <div class="flex-column align-items-center justify-content-center flex">
      <img src="/demo/images/notfound/logo-blue.svg" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0">
      <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, rgba(33, 150, 243, 0.4) 10%, rgba(33, 150, 243, 0) 30%)">
        <div class="surface-card flex-column align-items-center w-full flex px-5 py-8 sm:px-8" style="border-radius: 53px">
          <span class="text-3xl font-bold text-blue-500">404</span>
          <h1 class="mb-2 text-3xl text-900 font-bold lg:text-5xl">
            Not Found
          </h1>
          <div class="mb-5 text-600">
            Requested resource is not available.
          </div>
          <router-link to="/" class="align-items-center border-bottom-1 w-full flex py-5 border-300">
            <span class="justify-content-center align-items-center border-round flex bg-cyan-400" style="height: 3.5rem; width: 3.5rem">
              <i class="pi pi-fw text-2xl text-50 pi-table" />
            </span>
            <span class="flex-column flex ml-4">
              <span class="mb-0 block text-900 font-medium lg:text-xl">Frequently Asked Questions</span>
              <span class="text-600 lg:text-xl">Ultricies mi quis hendrerit dolor.</span>
            </span>
          </router-link>
          <router-link to="/" class="align-items-center border-bottom-1 w-full flex border-300 py-5">
            <span class="justify-content-center align-items-center border-round flex bg-orange-400" style="height: 3.5rem; width: 3.5rem">
              <i class="pi pi-fw text-2xl text-50 pi-question-circle" />
            </span>
            <span class="flex-column ml-4 flex">
              <span class="mb-0 text-900 font-medium lg:text-xl">Solution Center</span>
              <span class="text-600 lg:text-xl">Phasellus faucibus scelerisque eleifend.</span>
            </span>
          </router-link>
          <router-link to="/" class="align-items-center border-bottom-1 mb-5 w-full flex border-300 py-5">
            <span class="justify-content-center align-items-center border-round flex bg-indigo-400" style="height: 3.5rem; width: 3.5rem">
              <i class="pi pi-fw text-2xl text-50 pi-unlock" />
            </span>
            <span class="flex-column ml-4 flex">
              <span class="mb-0 text-900 font-medium lg:text-xl">Permission Manager</span>
              <span class="text-600 lg:text-xl">Accumsan in nisl nisi scelerisque</span>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <AppConfig simple />
</template>
