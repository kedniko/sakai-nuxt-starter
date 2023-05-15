<script setup>
import ProductService from '@/service/ProductService'
import PhotoService from '@/service/PhotoService'

const products = ref([])
const images = ref([])
const galleriaResponsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5,
  },
  {
    breakpoint: '960px',
    numVisible: 4,
  },
  {
    breakpoint: '768px',
    numVisible: 3,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
  },
])
const carouselResponsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
])

const productService = new ProductService()
const photoService = new PhotoService()

onMounted(() => {
  productService.getProductsSmall().then(data => (products.value = data))
  photoService.getImages().then(data => (images.value = data))
})
</script>

<template>
  <div class="p-fluid grid">
    <div class="col-12">
      <div class="card">
        <h5>Carousel</h5>
        <Carousel :value="products" :num-visible="3" :num-scroll="3" :circular="false" :responsive-options="carouselResponsiveOptions">
          <template #item="product">
            <div class="product-item">
              <div class="product-item-content">
                <div class="mb-3">
                  <img :src="`/demo/images/product/${product.data.image}`" :alt="product.data.name" class="product-image">
                </div>
                <div>
                  <h4 class="mb-1">
                    {{ product.data.name }}
                  </h4>
                  <h6 class="mb-3 mt-0">
                    ${{ product.data.price }}
                  </h6>
                  <span :class="`product-badge status-${product.data.inventoryStatus.toLowerCase()}`">{{ product.data.inventoryStatus }}</span>
                  <div class="mt-5 car-buttons">
                    <Button type="button" class="p-button p-button-rounded mr-2" icon="pi pi-search" />
                    <Button type="button" class="p-button-success p-button-rounded mr-2" icon="pi pi-star-fill" />
                    <Button type="button" class="p-button-help p-button-rounded" icon="pi pi-cog" />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h5>Galleria</h5>
        <Galleria :value="images" :responsive-options="galleriaResponsiveOptions" :num-visible="7" :circular="true" container-style="max-width: 800px; margin: auto">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block">
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;">
          </template>
        </Galleria>
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h5>Image</h5>
        <div class="justify-content-center flex">
          <Image src="/demo/images/galleria/galleria11.jpg" alt="Image" width="250" preview />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/demo/styles/badges.scss';
@import '@/assets/demo/styles/items.scss';
</style>
