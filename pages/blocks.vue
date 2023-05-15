<script setup>
const block1 = ref(`<div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">Create the screens your</span>
            <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
            <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="/demo/images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
</div>`)
const block2 = ref(`<div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div class="mb-3 font-bold text-2xl">
        <span class="text-900">One Product, </span>
        <span class="text-blue-600">Many Solutions</span>
    </div>
    <div class="text-700 text-sm mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div class="grid">
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Built for Developers</div>
            <span class="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">End-to-End Encryption</div>
            <span class="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Easy to Use</div>
            <span class="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Fast & Global Support</div>
            <span class="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Open Source</div>
            <span class="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Trusted Securitty</div>
            <span class="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
        </div>
    </div>
</div>`)

const block3 = ref(`<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
    <div class="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

    <div class="grid">
        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Basic</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$9</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                    <Button label="Buy Now" class="p-3 w-full mt-auto"></Button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Premium</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$29</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <Button label="Buy Now" class="p-3 w-full"></Button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Enterprise</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$49</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Imperdiet proin</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Nisi scelerisque</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <Button label="Buy Now" class="p-3 w-full p-button-outlined"></Button>
                </div>
            </div>
        </div>
    </div>
</div>`)

const block4 = ref(`<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
        <div class="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
        <div class="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        <Button label="Join Now" icon="pi pi-discord" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></Button>
    </div>
</div>`)

const block5 = ref(`<div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8">🔥 Hot Deals!</div>
    <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
    </div>
    <a class="flex align-items-center ml-2 mr-8">
        <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
    </a>
    <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
    </a>
</div>`)

const block6 = ref(`<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a class="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span class="text-900 line-height-3">Analytics</span>
        </li>
    </ul>
    <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
        <div>
            <div class="font-medium text-3xl text-900">Customers</div>
            <div class="flex align-items-center text-700 flex-wrap">
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-users mr-2"></i>
                    <span>332 Active Users</span>
                </div>
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-globe mr-2"></i>
                    <span>9402 Sessions</span>
                </div>
                <div class="flex align-items-center mt-3">
                    <i class="pi pi-clock mr-2"></i>
                    <span>2.32m Avg. Duration</span>
                </div>
            </div>
        </div>
        <div class="mt-3 lg:mt-0">
            <Button label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus"></Button>
            <Button label="Save" icon="pi pi-check"></Button>
        </div>
    </div>
</div>`)

const block7 = ref(`<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Orders</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Revenue</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Customers</span>
                        <div class="text-900 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">520  </span>
                <span class="text-500">newly registered</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Comments</span>
                        <div class="text-900 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
            </div>
        </div>
    </div>
</div>`)

const block8 = ref(`<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <img src="/demo/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                <label for="rememberme1">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
    </div>
</div>`)

const block9 = ref(`<div class="surface-section">
    <div class="font-medium text-3xl text-900 mb-3">Movie Information</div>
    <div class="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
    <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Title</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Genre</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                <Chip label="Crime" class="mr-2"></Chip>
                <Chip label="Drama" class="mr-2"></Chip>
                <Chip label="Thriller"></Chip>
            </div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Director</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Actors</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Plot</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                A group of professional bank robbers start to feel the heat from police
                when they unknowingly leave a clue at their latest heist.</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
    </ul>
</div>`)

const block10 = ref(`<div class="surface-card p-4 shadow-2 border-round">
    <div class="text-3xl font-medium text-900 mb-3">Card Title</div>
    <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`)

const checked = ref(false)
</script>

<template>
  <div>
    <BlockViewer header="Hero" :code="block1">
      <div class="grid grid-nogutter surface-section text-800">
        <div class="col-12 align-items-center flex text-center md:col-6 p-6 md:text-left">
          <section>
            <span class="block font-bold mb-1 text-6xl">Create the screens your</span>
            <div class="mb-3 text-6xl font-bold text-primary">
              your visitors deserve to see
            </div>
            <p class="line-height-3 mb-4 mt-0 text-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Button label="Learn More" type="button" class="p-button-raised mr-3" />
            <Button label="Live Demo" type="button" class="p-button-outlined" />
          </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden">
          <img src="/demo/images/blocks/hero/hero-1.png" alt="Image" class="block md:ml-auto md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
        </div>
      </div>
    </BlockViewer>

    <BlockViewer header="Feature" :code="block2">
      <div class="surface-section py-8 text-center px-4 lg:px-8 md:px-6">
        <div class="mb-3 text-2xl font-bold">
          <span class="text-900">One Product, </span>
          <span class="text-blue-600">Many Solutions</span>
        </div>
        <div class="text-700 mb-6 text-sm">
          Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.
        </div>
        <div class="grid">
          <div class="col-12 mb-4 px-5 md:col-4">
            <span class="surface-card mb-3 p-3 shadow-2 inline-block" style="border-radius: 10px">
              <i class="pi text-4xl text-blue-500 pi-desktop" />
            </span>
            <div class="mb-3 text-900 font-medium">
              Built for Developers
            </div>
            <span class="line-height-3 text-700 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
          </div>
          <div class="col-12 md:col-4 mb-4 px-5">
            <span class="shadow-2 surface-card mb-3 inline-block p-3" style="border-radius: 10px">
              <i class="pi pi-lock text-4xl text-blue-500" />
            </span>
            <div class="mb-3 text-900 font-medium">
              End-to-End Encryption
            </div>
            <span class="line-height-3 text-700 text-sm">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
          </div>
          <div class="col-12 md:col-4 mb-4 px-5">
            <span class="shadow-2 surface-card mb-3 inline-block p-3" style="border-radius: 10px">
              <i class="pi text-4xl text-blue-500 pi-check-circle" />
            </span>
            <div class="mb-3 text-900 font-medium">
              Easy to Use
            </div>
            <span class="line-height-3 text-700 text-sm">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
          </div>
          <div class="col-12 md:col-4 mb-4 px-5">
            <span class="shadow-2 surface-card mb-3 inline-block p-3" style="border-radius: 10px">
              <i class="pi text-4xl text-blue-500 pi-globe" />
            </span>
            <div class="mb-3 text-900 font-medium">
              Fast & Global Support
            </div>
            <span class="line-height-3 text-700 text-sm">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
          </div>
          <div class="col-12 md:col-4 mb-4 px-5">
            <span class="shadow-2 surface-card mb-3 inline-block p-3" style="border-radius: 10px">
              <i class="pi text-4xl text-blue-500 pi-github" />
            </span>
            <div class="mb-3 text-900 font-medium">
              Open Source
            </div>
            <span class="line-height-3 text-700 text-sm">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
          </div>
          <div class="col-12 md:col-4 mb-0 px-3 md:mb-4">
            <span class="shadow-2 surface-card mb-3 inline-block p-3" style="border-radius: 10px">
              <i class="pi text-4xl text-blue-500 pi-shield" />
            </span>
            <div class="mb-3 text-900 font-medium">
              Trusted Securitty
            </div>
            <span class="line-height-3 text-700 text-sm">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
          </div>
        </div>
      </div>
    </BlockViewer>

    <BlockViewer header="Pricing" :code="block3">
      <div class="surface-ground px-4 py-8 lg:px-8 md:px-6">
        <div class="mb-4 text-center text-6xl text-900 font-bold">
          Pricing Plans
        </div>
        <div class="line-height-3 mb-6 text-center text-700 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.
        </div>

        <div class="grid">
          <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
              <div class="shadow-2 flex-column surface-card h-full flex p-3" style="border-radius: 6px">
                <div class="mb-2 text-900 text-xl font-medium">
                  Basic
                </div>
                <div class="text-600">
                  Plan description
                </div>
                <hr class="surface-border border-top-1 mx-0 my-3 border-none">
                <div class="align-items-center flex">
                  <span class="text-2xl text-900 font-bold">$9</span>
                  <span class="ml-2 text-600 font-medium">per month</span>
                </div>
                <hr class="border-top-1 surface-border mx-0 my-3 border-none">
                <ul class="m-0 p-0 flex-grow-1 list-none">
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Morbi tincidunt augue</span>
                  </li>
                </ul>
                <hr class="border-top-1 surface-border mx-0 mb-3 border-none mt-auto">
                <Button label="Buy Now" class="mt-auto w-full p-3" />
              </div>
            </div>
          </div>

          <div class="col-12 lg:col-4">
            <div class="h-full p-3">
              <div class="shadow-2 flex-column surface-card h-full flex p-3" style="border-radius: 6px">
                <div class="mb-2 text-900 text-xl font-medium">
                  Premium
                </div>
                <div class="text-600">
                  Plan description
                </div>
                <hr class="border-top-1 surface-border mx-0 my-3 border-none">
                <div class="align-items-center flex">
                  <span class="text-2xl text-900 font-bold">$29</span>
                  <span class="ml-2 text-600 font-medium">per month</span>
                </div>
                <hr class="border-top-1 surface-border mx-0 my-3 border-none">
                <ul class="m-0 flex-grow-1 list-none p-0">
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Morbi tincidunt augue</span>
                  </li>
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Duis ultricies lacus sed</span>
                  </li>
                </ul>
                <hr class="border-top-1 surface-border mx-0 mb-3 border-none">
                <Button label="Buy Now" class="w-full p-3" />
              </div>
            </div>
          </div>

          <div class="col-12 lg:col-4">
            <div class="h-full p-3">
              <div class="shadow-2 flex-column surface-card flex p-3" style="border-radius: 6px">
                <div class="mb-2 text-900 text-xl font-medium">
                  Enterprise
                </div>
                <div class="text-600">
                  Plan description
                </div>
                <hr class="border-top-1 surface-border mx-0 my-3 border-none">
                <div class="align-items-center flex">
                  <span class="text-2xl text-900 font-bold">$49</span>
                  <span class="ml-2 text-600 font-medium">per month</span>
                </div>
                <hr class="border-top-1 surface-border mx-0 my-3 border-none">
                <ul class="m-0 flex-grow-1 list-none p-0">
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Morbi tincidunt augue</span>
                  </li>
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Duis ultricies lacus sed</span>
                  </li>
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Imperdiet proin</span>
                  </li>
                  <li class="align-items-center mb-3 flex">
                    <i class="pi pi-check-circle mr-2 text-green-500" />
                    <span>Nisi scelerisque</span>
                  </li>
                </ul>
                <hr class="border-top-1 surface-border mx-0 mb-3 border-none">
                <Button label="Buy Now" class="p-button-outlined w-full p-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlockViewer>

    <BlockViewer header="Call to Action" :code="block4">
      <div class="surface-section px-4 py-8 lg:px-8 md:px-6">
        <div class="text-center text-700">
          <div class="mb-3 font-bold text-blue-600">
            <i class="pi pi-discord" />&nbsp;POWERED BY DISCORD
          </div>
          <div class="mb-3 text-5xl text-900 font-bold">
            Join Our Design Community
          </div>
          <div class="mb-5 text-2xl text-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.
          </div>
          <Button label="Join Now" icon="pi pi-discord" class="p-button-raised p-button-rounded px-5 font-bold white-space-nowrap py-3" />
        </div>
      </div>
    </BlockViewer>

    <BlockViewer header="Banner" :code="block5" container-class="surface-section py-8">
      <div class="justify-content-between align-items-center flex p-3 lg:justify-content-center flex-wrap bg-bluegray-900 text-gray-100">
        <div class="font-bold mr-8">
          🔥 Hot Deals!
        </div>
        <div class="align-items-center hidden lg:flex">
          <span class="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
        </div>
        <a class="align-items-center ml-2 mr-8 flex">
          <a class="text-white" href="#"><span class="font-bold underline">Learn More</span></a>
        </a>
        <a v-ripple class="align-items-center justify-content-center border-circle flex cursor-pointer no-underline p-ripple text-gray-50 transition-colors transition-duration-150 hover:bg-bluegray-700" style="width: 2rem; height: 2rem">
          <i class="pi pi-times" />
        </a>
      </div>
    </BlockViewer>

    <BlockViewer header="Page Heading" :code="block6">
      <div class="surface-section px-4 lg:px-8 md:px-6 py-5">
        <ul class="align-items-center m-0 mb-3 flex list-none p-0 font-medium">
          <li>
            <a class="line-height-3 cursor-pointer no-underline text-500">Application</a>
          </li>
          <li class="px-2">
            <i class="pi line-height-3 text-500 pi-angle-right" />
          </li>
          <li>
            <span class="line-height-3 text-900">Analytics</span>
          </li>
        </ul>
        <div class="flex-column flex align-items-start lg:justify-content-between lg:flex-row">
          <div>
            <div class="text-3xl text-900 font-medium">
              Customers
            </div>
            <div class="align-items-center flex flex-wrap text-700">
              <div class="align-items-center mt-3 flex mr-5">
                <i class="pi mr-2 pi-users" />
                <span>332 Active Users</span>
              </div>
              <div class="align-items-center mr-5 mt-3 flex">
                <i class="pi pi-globe mr-2" />
                <span>9402 Sessions</span>
              </div>
              <div class="align-items-center mt-3 flex">
                <i class="pi mr-2 pi-clock" />
                <span>2.32m Avg. Duration</span>
              </div>
            </div>
          </div>
          <div class="mt-3 lg:mt-0">
            <Button label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus" />
            <Button label="Save" icon="pi pi-check" />
          </div>
        </div>
      </div>
    </BlockViewer>

    <BlockViewer header="Stats" :code="block7">
      <div class="surface-ground px-4 py-5 lg:px-8 md:px-6">
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 border-round p-3">
              <div class="justify-content-between mb-3 flex">
                <div>
                  <span class="mb-3 block text-500 font-medium">Orders</span>
                  <div class="text-900 text-xl font-medium">
                    152
                  </div>
                </div>
                <div class="align-items-center justify-content-center border-round flex bg-blue-100" style="width: 2.5rem; height: 2.5rem">
                  <i class="pi text-xl text-blue-500 pi-shopping-cart" />
                </div>
              </div>
              <span class="font-medium text-green-500">24 new </span>
              <span class="text-500">since last visit</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 border-round p-3">
              <div class="justify-content-between mb-3 flex">
                <div>
                  <span class="mb-3 block text-500 font-medium">Revenue</span>
                  <div class="text-900 text-xl font-medium">
                    $2.100
                  </div>
                </div>
                <div class="align-items-center justify-content-center border-round flex bg-orange-100" style="width: 2.5rem; height: 2.5rem">
                  <i class="pi text-xl pi-map-marker text-orange-500" />
                </div>
              </div>
              <span class="font-medium text-green-500">%52+ </span>
              <span class="text-500">since last week</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 border-round p-3">
              <div class="justify-content-between mb-3 flex">
                <div>
                  <span class="mb-3 block text-500 font-medium">Customers</span>
                  <div class="text-900 text-xl font-medium">
                    28441
                  </div>
                </div>
                <div class="align-items-center justify-content-center border-round flex bg-cyan-100" style="width: 2.5rem; height: 2.5rem">
                  <i class="pi text-xl pi-inbox text-cyan-500" />
                </div>
              </div>
              <span class="font-medium text-green-500">520 </span>
              <span class="text-500">newly registered</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 border-round p-3">
              <div class="justify-content-between mb-3 flex">
                <div>
                  <span class="mb-3 block text-500 font-medium">Comments</span>
                  <div class="text-900 text-xl font-medium">
                    152 Unread
                  </div>
                </div>
                <div class="align-items-center justify-content-center border-round flex bg-purple-100" style="width: 2.5rem; height: 2.5rem">
                  <i class="pi text-xl pi-comment text-purple-500" />
                </div>
              </div>
              <span class="font-medium text-green-500">85 </span>
              <span class="text-500">responded</span>
            </div>
          </div>
        </div>
      </div>
    </BlockViewer>

    <BlockViewer header="Sign-In" :code="block8" container-class="surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
      <div class="surface-card shadow-2 border-round w-full p-4 lg:w-6">
        <div class="mb-5 text-center">
          <img src="/demo/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
          <div class="mb-3 text-3xl text-900 font-medium">
            Welcome Back
          </div>
          <span class="line-height-3 text-600 font-medium">Don't have an account?</span>
          <a class="ml-2 cursor-pointer font-medium text-blue-500 no-underline">Create today!</a>
        </div>

        <div>
          <label for="email1" class="mb-2 block text-900 font-medium">Email</label>
          <InputText id="email1" type="text" class="mb-3 w-full" />

          <label for="password1" class="mb-2 block text-900 font-medium">Password</label>
          <InputText id="password1" type="password" class="mb-3 w-full" />

          <div class="align-items-center justify-content-between mb-6 flex">
            <div class="align-items-center flex">
              <Checkbox id="rememberme1" v-model="checked" :binary="true" class="mr-2" />
              <label for="rememberme1">Remember me</label>
            </div>
            <a class="ml-2 cursor-pointer text-right font-medium text-blue-500 no-underline">Forgot password?</a>
          </div>

          <Button label="Sign In" icon="pi pi-user" class="w-full" />
        </div>
      </div>
    </BlockViewer>

    <BlockViewer header="Description List" :code="block9" container-class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="surface-section">
        <div class="mb-3 text-3xl text-900 font-medium">
          Movie Information
        </div>
        <div class="mb-5 text-500">
          Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.
        </div>
        <ul class="m-0 list-none p-0">
          <li class="align-items-center border-top-1 surface-border flex flex-wrap px-2 py-3">
            <div class="text-500 font-medium w-6 md:w-2">
              Title
            </div>
            <div class="w-full text-900 flex-order-1 md:flex-order-0 md:w-8">
              Heat
            </div>
            <div class="w-6 flex md:w-2 justify-content-end">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text" />
            </div>
          </li>
          <li class="align-items-center border-top-1 surface-border flex flex-wrap px-2 py-3">
            <div class="w-6 text-500 font-medium md:w-2">
              Genre
            </div>
            <div class="md:flex-order-0 flex-order-1 w-full text-900 md:w-8">
              <Chip label="Crime" class="mr-2" />
              <Chip label="Drama" class="mr-2" />
              <Chip label="Thriller" />
            </div>
            <div class="justify-content-end w-6 flex md:w-2">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text" />
            </div>
          </li>
          <li class="align-items-center border-top-1 surface-border flex flex-wrap px-2 py-3">
            <div class="w-6 text-500 font-medium md:w-2">
              Director
            </div>
            <div class="md:flex-order-0 flex-order-1 w-full text-900 md:w-8">
              Michael Mann
            </div>
            <div class="justify-content-end w-6 flex md:w-2">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text" />
            </div>
          </li>
          <li class="align-items-center border-top-1 surface-border flex flex-wrap px-2 py-3">
            <div class="w-6 text-500 font-medium md:w-2">
              Actors
            </div>
            <div class="md:flex-order-0 flex-order-1 w-full text-900 md:w-8">
              Robert De Niro, Al Pacino
            </div>
            <div class="justify-content-end w-6 flex md:w-2">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text" />
            </div>
          </li>
          <li class="align-items-center border-top-1 surface-border flex flex-wrap px-2 py-3 border-bottom-1">
            <div class="w-6 text-500 font-medium md:w-2">
              Plot
            </div>
            <div class="md:flex-order-0 flex-order-1 line-height-3 w-full text-900 md:w-8">
              A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.
            </div>
            <div class="justify-content-end w-6 flex md:w-2">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text" />
            </div>
          </li>
        </ul>
      </div>
    </BlockViewer>

    <BlockViewer header="Card" :code="block10" container-class="px-4 py-8 md:px-6 lg:px-8">
      <div class="surface-card shadow-2 border-round p-4">
        <div class="mb-3 text-3xl text-900 font-medium">
          Card Title
        </div>
        <div class="mb-3 text-500 font-medium">
          Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.
        </div>
        <div style="height: 150px" class="surface-border border-2 border-dashed" />
      </div>
    </BlockViewer>
  </div>
</template>
