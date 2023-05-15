<script setup>
const { layoutConfig } = useLayout()

function smoothScroll(id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
  })
}

const logoUrl = computed(() => {
  return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`
})
</script>

<template>
  <div class="justify-content-center flex surface-0">
    <div id="home" class="overflow-hidden landing-wrapper">
      <div class="align-items-center justify-content-between mx-0 mb-3 flex px-4 lg:px-8 relative py-4 lg:static lg:mx-8 md:mx-6">
        <a class="align-items-center flex" href="#"> <img :src="logoUrl" alt="Sakai Logo" height="50" class="mr-0 lg:mr-2"><span class="line-height-3 mr-8 text-2xl text-900 font-medium">SAKAI</span> </a>
        <a v-ripple v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }" class="p-ripple block cursor-pointer text-700 lg:hidden">
          <i class="pi pi-bars text-4xl" />
        </a>
        <div class="align-items-center surface-0 justify-content-between hidden w-full flex-grow-1 lg:static lg:flex absolute left-0 z-2 px-6 lg:px-0" style="top: 120px">
          <ul class="flex-column m-0 flex cursor-pointer list-none p-0 lg:flex-row lg:align-items-center select-none">
            <li>
              <a v-ripple class="line-height-3 p-ripple m-0 flex py-3 text-900 font-medium px-0 md:ml-5" @click="smoothScroll('#hero')">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a v-ripple class="line-height-3 p-ripple m-0 flex px-0 py-3 text-900 font-medium md:ml-5" @click="smoothScroll('#features')">
                <span>Features</span>
              </a>
            </li>
            <li>
              <a v-ripple class="line-height-3 p-ripple m-0 flex px-0 py-3 text-900 font-medium md:ml-5" @click="smoothScroll('#highlights')">
                <span>Highlights</span>
              </a>
            </li>
            <li>
              <a v-ripple class="line-height-3 p-ripple m-0 flex px-0 py-3 text-900 font-medium md:ml-5" @click="smoothScroll('#pricing')">
                <span>Pricing</span>
              </a>
            </li>
          </ul>
          <div class="justify-content-between border-top-1 surface-border mt-3 flex py-3 lg:mt-0 lg:border-top-none lg:block lg:py-0">
            <Button label="Login" class="p-button-text p-button-rounded border-none text-blue-500 line-height-2 font-light" />
            <Button label="Register" class="p-button-rounded line-height-2 border-none font-light text-white ml-5 bg-blue-500" />
          </div>
        </div>
      </div>

      <div id="hero" class="flex-column flex overflow-hidden px-4 lg:px-8 pt-4" style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)">
        <div class="mt-0 mx-4 md:mx-8 md:mt-4">
          <h1 class="line-height-2 text-6xl font-bold text-gray-900">
            <span class="block font-light">Eu sem integer</span>eget magna fermentum
          </h1>
          <p class="line-height-3 text-2xl font-normal text-gray-700 md:mt-3">
            Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...
          </p>
          <Button label="Get Started" class="p-button-rounded line-height-3 mt-5 border-none bg-blue-500 px-3 text-xl font-normal text-white" />
        </div>
        <div class="justify-content-center flex md:justify-content-end">
          <img src="/demo/images/landing/screen-1.png" alt="Hero Image" class="w-9 md:w-auto">
        </div>
      </div>

      <div id="features" class="mx-0 mt-5 px-4 py-4 lg:mx-8 lg:px-8">
        <div class="justify-content-center grid">
          <div class="col-12 mb-4 text-center mt-8">
            <h2 class="mb-2 text-900 font-normal">
              Marvelous Features
            </h2>
            <span class="text-2xl text-600">Placerat in egestas erat...</span>
          </div>

          <div class="col-12 lg:col-4 mt-4 p-0 lg:mt-0 md:col-12 lg:pb-5 lg:pr-5">
            <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))">
              <div class="surface-card h-full p-3" style="border-radius: 8px">
                <div class="align-items-center justify-content-center mb-3 flex bg-yellow-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                  <i class="pi pi-fw pi-users text-2xl text-yellow-700" />
                </div>
                <h5 class="mb-2 text-900">
                  Easy to Use
                </h5>
                <span class="text-600">Posuere morbi leo urna molestie.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5 lg:pr-5">
            <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))">
              <div class="surface-card h-full p-3" style="border-radius: 8px">
                <div class="align-items-center justify-content-center mb-3 flex bg-cyan-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                  <i class="pi pi-fw text-2xl pi-palette text-cyan-700" />
                </div>
                <h5 class="mb-2 text-900">
                  Fresh Design
                </h5>
                <span class="text-600">Semper risus in hendrerit.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5">
            <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))">
              <div class="surface-card h-full p-3" style="border-radius: 8px">
                <div class="align-items-center justify-content-center flex bg-indigo-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                  <i class="pi pi-fw text-2xl pi-map text-indigo-700" />
                </div>
                <h5 class="mb-2 text-900">
                  Well Documented
                </h5>
                <span class="text-600">Non arcu risus quis varius quam quisque.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5 lg:pr-5">
            <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))">
              <div class="surface-card h-full p-3" style="border-radius: 8px">
                <div class="align-items-center justify-content-center mb-3 flex bg-bluegray-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                  <i class="pi pi-fw text-2xl pi-id-card text-bluegray-700" />
                </div>
                <h5 class="mb-2 text-900">
                  Responsive Layout
                </h5>
                <span class="text-600">Nulla malesuada pellentesque elit.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5 lg:pr-5">
            <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))">
              <div class="surface-card h-full p-3" style="border-radius: 8px">
                <div class="align-items-center justify-content-center mb-3 flex bg-orange-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                  <i class="pi pi-fw text-2xl pi-star text-orange-700" />
                </div>
                <h5 class="mb-2 text-900">
                  Clean Code
                </h5>
                <span class="text-600">Condimentum lacinia quis vel eros.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5">
            <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))">
              <div class="surface-card h-full p-3" style="border-radius: 8px">
                <div class="align-items-center justify-content-center mb-3 flex bg-pink-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                  <i class="pi pi-fw text-2xl pi-moon text-pink-700" />
                </div>
                <h5 class="mb-2 text-900">
                  Dark Mode
                </h5>
                <span class="text-600">Convallis tellus id interdum velit laoreet.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pr-5">
            <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))">
              <div class="surface-card h-full p-3" style="border-radius: 8px">
                <div class="align-items-center justify-content-center mb-3 flex bg-teal-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                  <i class="pi pi-fw pi-shopping-cart text-2xl text-teal-700" />
                </div>
                <h5 class="mb-2 text-900">
                  Ready to Use
                </h5>
                <span class="text-600">Mauris sit amet massa vitae.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pr-5">
            <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))">
              <div class="surface-card h-full p-3" style="border-radius: 8px">
                <div class="align-items-center justify-content-center mb-3 flex bg-blue-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                  <i class="pi pi-fw pi-globe text-2xl text-blue-700" />
                </div>
                <h5 class="mb-2 text-900">
                  Modern Practices
                </h5>
                <span class="text-600">Elementum nibh tellus molestie nunc non.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg-4">
            <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))">
              <div class="surface-card h-full p-3" style="border-radius: 8px">
                <div class="align-items-center justify-content-center mb-3 flex bg-purple-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                  <i class="pi pi-fw text-2xl pi-eye text-purple-700" />
                </div>
                <h5 class="mb-2 text-900">
                  Privacy
                </h5>
                <span class="text-600">Neque egestas congue quisque.</span>
              </div>
            </div>
          </div>

          <div class="col-12 mt-8 mb-8 p-2 md:p-8" style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)">
            <div class="flex-column justify-content-center align-items-center flex px-3 py-3 text-center md:py-0">
              <h3 class="mb-2 text-gray-900">
                Joséphine Miller
              </h3>
              <span class="text-2xl text-gray-600">Peak Interactive</span>
              <p class="mt-4 text-2xl text-gray-900 sm:line-height-2 md:line-height-4" style="max-width: 800px">
                “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
              </p>
              <img src="/demo/images/landing/peak-logo.svg" class="mt-4" alt="Company logo">
            </div>
          </div>
        </div>
      </div>

      <div id="highlights" class="mx-0 px-4 py-4 lg:mx-8 lg:px-8 my-6">
        <div class="text-center">
          <h2 class="mb-2 text-900 font-normal">
            Powerful Everywhere
          </h2>
          <span class="text-2xl text-600">Amet consectetur adipiscing elit...</span>
        </div>

        <div class="grid mt-8 pb-2 md:pb-8">
          <div class="justify-content-center col-12 lg:col-6 flex-order-1 flex bg-purple-100 p-0 lg:flex-order-0" style="border-radius: 8px">
            <img src="/demo/images/landing/mockup.svg" class="w-11" alt="mockup mobile">
          </div>

          <div class="col-12 lg:col-6 flex-column flex text-center lg:align-items-end my-auto lg:text-right">
            <div class="align-items-center justify-content-center flex bg-purple-200 align-self-center lg:align-self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
              <i class="pi pi-fw text-5xl text-purple-700 pi-mobile" />
            </div>
            <h2 class="text-4xl text-900 font-normal line-height-1">
              Congue Quisque Egestas
            </h2>
            <span class="line-height-3 ml-0 text-2xl text-700 md:ml-2" style="max-width: 650px">Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.</span>
          </div>
        </div>

        <div class="grid my-8 pt-2 md:pt-8">
          <div class="col-12 lg:col-6 flex-column my-auto flex text-center lg:align-items-start lg:text-left">
            <div class="align-items-center justify-content-center align-self-center flex bg-yellow-200 lg:align-self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
              <i class="pi pi-fw pi-desktop text-5xl text-yellow-700" />
            </div>
            <h2 class="line-height-1 text-4xl text-900 font-normal">
              Celerisque Eu Ultrices
            </h2>
            <span class="line-height-3 mr-0 text-2xl text-700 md:mr-2" style="max-width: 650px">Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.</span>
          </div>

          <div class="justify-content-end flex-order-1 col-12 lg:col-6 flex p-0 sm:flex-order-2 bg-yellow-100" style="border-radius: 8px">
            <img src="/demo/images/landing/mockup-desktop.svg" class="w-11" alt="mockup">
          </div>
        </div>
      </div>

      <div id="pricing" class="my-2 px-4 py-4 lg:px-8 md:my-4">
        <div class="text-center">
          <h2 class="mb-2 text-900 font-normal">
            Matchless Pricing
          </h2>
          <span class="text-2xl text-600">Amet consectetur adipiscing elit...</span>
        </div>

        <div class="justify-content-between grid mt-8 md:mt-0">
          <div class="col-12 lg:col-4 p-0 md:p-3">
            <div class="flex-column flex cursor-pointer border-2 p-3 pricing-card hover:border-primary border-200 transition-all transition-duration-300" style="border-radius: 10px">
              <h3 class="text-center text-900 my-5">
                Free
              </h3>
              <img src="/demo/images/landing/free.svg" class="mx-auto h-10 w-10" alt="free">
              <div class="my-5 text-center">
                <span class="mr-2 text-5xl text-900 font-bold">$0</span>
                <span class="text-600">per month</span>
                <Button label="Get Started" class="p-button-rounded line-height-2 mx-auto ml-3 mt-4 block border-none bg-blue-500 font-light text-white" />
              </div>
              <Divider class="w-full bg-surface-200" />
              <ul class="flex-column my-5 flex list-none p-0 text-900">
                <li class="py-2">
                  <i class="pi pi-fw mr-2 text-xl text-cyan-500 pi-check" />
                  <span class="line-height-3 text-xl">Responsive Layout</span>
                </li>
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">Unlimited Push Messages</span>
                </li>
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">50 Support Ticket</span>
                </li>
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">Free Shipping</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-12 lg:col-4 mt-4 p-0 md:mt-0 md:p-3">
            <div class="flex-column pricing-card hover:border-primary flex cursor-pointer border-2 border-200 p-3 transition-all transition-duration-300" style="border-radius: 10px">
              <h3 class="my-5 text-center text-900">
                Startup
              </h3>
              <img src="/demo/images/landing/startup.svg" class="mx-auto h-10 w-10" alt="startup">
              <div class="my-5 text-center">
                <span class="mr-2 text-5xl text-900 font-bold">$1</span>
                <span class="text-600">per month</span>
                <Button label="Try Free" class="p-button-rounded line-height-2 mx-auto ml-3 mt-4 block border-none bg-blue-500 font-light text-white" />
              </div>
              <Divider class="bg-surface-200 w-full" />
              <ul class="flex-column my-5 flex list-none p-0 text-900">
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">Responsive Layout</span>
                </li>
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">Unlimited Push Messages</span>
                </li>
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">50 Support Ticket</span>
                </li>
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">Free Shipping</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-12 lg:col-4 mt-4 p-0 md:mt-0 md:p-3">
            <div class="flex-column pricing-card hover:border-primary flex cursor-pointer border-2 border-200 p-3 transition-all transition-duration-300" style="border-radius: 10px">
              <h3 class="my-5 text-center text-900">
                Enterprise
              </h3>
              <img src="/demo/images/landing/enterprise.svg" class="mx-auto h-10 w-10" alt="enterprise">
              <div class="my-5 text-center">
                <span class="mr-2 text-5xl text-900 font-bold">$999</span>
                <span class="text-600">per month</span>
                <Button label="Get a Quote" class="p-button-rounded line-height-2 mx-auto ml-3 mt-4 block border-none bg-blue-500 font-light text-white" />
              </div>
              <Divider class="bg-surface-200 w-full" />
              <ul class="flex-column my-5 flex list-none p-0 text-900">
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">Responsive Layout</span>
                </li>
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">Unlimited Push Messages</span>
                </li>
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">50 Support Ticket</span>
                </li>
                <li class="py-2">
                  <i class="pi pi-fw pi-check mr-2 text-xl text-cyan-500" />
                  <span class="line-height-3 text-xl">Free Shipping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-0 mt-8 px-4 py-4 lg:mx-8">
        <div class="justify-content-between grid">
          <div class="col-12 md:col-2" style="margin-top: -1.5rem">
            <a class="align-items-center justify-content-center mb-3 flex flex-wrap cursor-pointer md:mb-0 md:justify-content-start" @click="smoothScroll('#home')">
              <img :src="logoUrl" alt="footer sections" width="50" height="50" class="mr-2">
              <h4 class="text-3xl text-900 font-medium">SAKAI</h4>
            </a>
          </div>

          <div class="col-12 md:col-10 lg:col-7">
            <div class="grid text-center md:text-left">
              <div class="col-12 md:col-3">
                <h4 class="line-height-3 mb-3 text-2xl text-900 font-medium">
                  Company
                </h4>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">About Us</a>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">News</a>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">Investor Relations</a>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">Careers</a>
                <a class="line-height-3 block cursor-pointer text-700 text-xl">Media Kit</a>
              </div>

              <div class="col-12 md:col-3 mt-4 md:mt-0">
                <h4 class="line-height-3 mb-3 text-2xl text-900 font-medium">
                  Resources
                </h4>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">Get Started</a>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">Learn</a>
                <a class="line-height-3 block cursor-pointer text-700 text-xl">Case Studies</a>
              </div>

              <div class="col-12 md:col-3 mt-4 md:mt-0">
                <h4 class="line-height-3 mb-3 text-2xl text-900 font-medium">
                  Community
                </h4>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">Discord</a>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">Events<img src="/demo/images/landing/new-badge.svg" class="ml-2"></a>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">FAQ</a>
                <a class="line-height-3 block cursor-pointer text-700 text-xl">Blog</a>
              </div>

              <div class="col-12 md:col-3 mt-4 md:mt-0">
                <h4 class="line-height-3 mb-3 text-2xl text-900 font-medium">
                  Legal
                </h4>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">Brand Policy</a>
                <a class="line-height-3 mb-2 block cursor-pointer text-700 text-xl">Privacy Policy</a>
                <a class="line-height-3 block cursor-pointer text-700 text-xl">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppConfig simple />
</template>

<!-- <style scoped>
#hero {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #eeefaf 0%, #c3e3fa 100%);
    height: 700px;
    overflow: hidden;
}

@media screen and (min-width: 768px) {
    #hero {
        -webkit-clip-path: ellipse(150% 87% at 93% 13%);
        clip-path: ellipse(150% 87% at 93% 13%);
        height: 530px;
    }
}

@media screen and (min-width: 1300px) {
    #hero > img {
        position: absolute;
    }

    #hero > div > p {
        max-width: 450px;
    }
}

@media screen and (max-width: 1300px) {
    #hero {
        height: 600px;
    }

    #hero > img {
        position: static;
        transform: scale(1);
        margin-left: auto;
    }

    #hero > div {
        width: 100%;
    }

    #hero > div > p {
        width: 100%;
        max-width: 100%;
    }
}
</style> -->
