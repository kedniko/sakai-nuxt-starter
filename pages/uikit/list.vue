<script setup>
import ProductService from '@/service/ProductService'

const picklistValue = ref([
  [
    { name: 'San Francisco', code: 'SF' },
    { name: 'London', code: 'LDN' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Berlin', code: 'BRL' },
    { name: 'Barcelona', code: 'BRC' },
    { name: 'Rome', code: 'RM' },
  ],
  [],
])

const orderlistValue = ref([
  { name: 'San Francisco', code: 'SF' },
  { name: 'London', code: 'LDN' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Berlin', code: 'BRL' },
  { name: 'Barcelona', code: 'BRC' },
  { name: 'Rome', code: 'RM' },
])

const dataviewValue = ref(null)
const layout = ref('grid')
const sortKey = ref(null)
const sortOrder = ref(null)
const sortField = ref(null)
const sortOptions = ref([
  { label: 'Price High to Low', value: '!price' },
  { label: 'Price Low to High', value: 'price' },
])

const productService = new ProductService()

onMounted(() => {
  productService.getProductsSmall().then(data => (dataviewValue.value = data))
})

function onSortChange(event) {
  const value = event.value.value
  const sortValue = event.value

  if (value.indexOf('!') === 0) {
    sortOrder.value = -1
    sortField.value = value.substring(1, value.length)
    sortKey.value = sortValue
  }
  else {
    sortOrder.value = 1
    sortField.value = value
    sortKey.value = sortValue
  }
}
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>DataView</h5>
        <DataView :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sort-order="sortOrder" :sort-field="sortField">
          <template #header>
            <div class="grid-nogutter grid">
              <div class="col-6 text-left">
                <Dropdown v-model="sortKey" :options="sortOptions" option-label="label" placeholder="Sort By Price" @change="onSortChange($event)" />
              </div>
              <div class="col-6 text-right">
                <DataViewLayoutOptions v-model="layout" />
              </div>
            </div>
          </template>
          <template #list="slotProps">
            <div class="col-12">
              <div class="flex-column align-items-center w-full flex p-3 md:flex-row">
                <img :src="`/demo/images/product/${slotProps.data.image}`" :alt="slotProps.data.name" class="shadow-2 mr-5 w-9 my-4 md:my-0 md:w-10rem">
                <div class="flex-1 text-center md:text-left">
                  <div class="text-2xl font-bold">
                    {{ slotProps.data.name }}
                  </div>
                  <div class="mb-3">
                    {{ slotProps.data.description }}
                  </div>
                  <Rating :model-value="slotProps.data.rating" :readonly="true" :cancel="false" class="mb-2" />
                  <div class="align-items-center flex">
                    <i class="pi mr-2 pi-tag" />
                    <span class="font-semibold">{{ slotProps.data.category }}</span>
                  </div>
                </div>
                <div class="justify-content-between align-items-center mt-5 w-full flex md:mt-0 md:w-auto md:flex-column md:align-items-end flex-row">
                  <span class="align-self-center mb-2 text-2xl font-semibold md:align-self-end">${{ slotProps.data.price }}</span>
                  <Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'" class="mb-2" />
                  <span :class="`product-badge status-${slotProps.data.inventoryStatus.toLowerCase()}`">{{ slotProps.data.inventoryStatus }}</span>
                </div>
              </div>
            </div>
          </template>

          <template #grid="slotProps">
            <div class="col-12 md:col-4">
              <div class="card surface-border m-3 border-1">
                <div class="align-items-center justify-content-between flex">
                  <div class="align-items-center flex">
                    <i class="pi pi-tag mr-2" />
                    <span class="font-semibold">{{ slotProps.data.category }}</span>
                  </div>
                  <span :class="`product-badge status-${slotProps.data.inventoryStatus.toLowerCase()}`">{{ slotProps.data.inventoryStatus }}</span>
                </div>
                <div class="text-center">
                  <img :src="`/demo/images/product/${slotProps.data.image}`" :alt="slotProps.data.name" class="shadow-2 mx-0 my-3 w-9">
                  <div class="text-2xl font-bold">
                    {{ slotProps.data.name }}
                  </div>
                  <div class="mb-3">
                    {{ slotProps.data.description }}
                  </div>
                  <Rating :model-value="slotProps.data.rating" :readonly="true" :cancel="false" />
                </div>
                <div class="align-items-center justify-content-between flex">
                  <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                  <Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'" />
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </div>

    <div class="col-12 lg:col-8">
      <div class="card">
        <h5>PickList</h5>
        <PickList v-model="picklistValue" list-style="height:250px" data-key="code">
          <template #sourceheader>
            From
          </template>
          <template #targetheader>
            To
          </template>
          <template #item="slotProps">
            <div>{{ slotProps.item.name }}</div>
          </template>
        </PickList>
      </div>
    </div>

    <div class="col-12 lg:col-4">
      <div class="card">
        <h5>OrderList</h5>
        <OrderList v-model="orderlistValue" list-style="height:250px" data-key="code" :rows="10">
          <template #header>
            Cities
          </template>
          <template #item="slotProps">
            <div>{{ slotProps.item.name }}</div>
          </template>
        </OrderList>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/demo/styles/badges.scss';
</style>
