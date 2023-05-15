<script setup>
import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import ProductService from '@/service/ProductService'

const toast = useToast()

const products = ref(null)
const productDialog = ref(false)
const deleteProductDialog = ref(false)
const deleteProductsDialog = ref(false)
const product = ref({})
const selectedProducts = ref(null)
const dt = ref(null)
const filters = ref({})
const submitted = ref(false)
const statuses = ref([
  { label: 'INSTOCK', value: 'instock' },
  { label: 'LOWSTOCK', value: 'lowstock' },
  { label: 'OUTOFSTOCK', value: 'outofstock' },
])
const productService = new ProductService()

onBeforeMount(() => {
  initFilters()
})
onMounted(() => {
  productService.getProducts().then(data => (products.value = data))
})
function formatCurrency(value) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

function openNew() {
  product.value = {}
  submitted.value = false
  productDialog.value = true
}

function hideDialog() {
  productDialog.value = false
  submitted.value = false
}

function saveProduct() {
  submitted.value = true
  if (product.value.name && product.value.name.trim() && product.value.price) {
    if (product.value.id) {
      product.value.inventoryStatus = product.value.inventoryStatus.value ? product.value.inventoryStatus.value : product.value.inventoryStatus
      products.value[findIndexById(product.value.id)] = product.value
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 })
    }
    else {
      product.value.id = createId()
      product.value.code = createId()
      product.value.image = 'product-placeholder.svg'
      product.value.inventoryStatus = product.value.inventoryStatus ? product.value.inventoryStatus.value : 'INSTOCK'
      products.value.push(product.value)
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 })
    }
    productDialog.value = false
    product.value = {}
  }
}

function editProduct(editProduct) {
  product.value = { ...editProduct }
  productDialog.value = true
}

function confirmDeleteProduct(editProduct) {
  product.value = editProduct
  deleteProductDialog.value = true
}

function deleteProduct() {
  products.value = products.value.filter(val => val.id !== product.value.id)
  deleteProductDialog.value = false
  product.value = {}
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 })
}

function findIndexById(id) {
  let index = -1
  for (let i = 0; i < products.value.length; i++) {
    if (products.value[i].id === id) {
      index = i
      break
    }
  }
  return index
}

function createId() {
  let id = ''
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 5; i++)
    id += chars.charAt(Math.floor(Math.random() * chars.length))

  return id
}

function exportCSV() {
  dt.value.exportCSV()
}

function confirmDeleteSelected() {
  deleteProductsDialog.value = true
}
function deleteSelectedProducts() {
  products.value = products.value.filter(val => !selectedProducts.value.includes(val))
  deleteProductsDialog.value = false
  selectedProducts.value = null
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 })
}

function initFilters() {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  }
}
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <Toast />
        <Toolbar class="mb-4">
          <template #start>
            <div class="my-2">
              <Button label="New" icon="pi pi-plus" class="mr-2 p-button-success" @click="openNew" />
              <Button label="Delete" icon="pi pi-trash" class="p-button-danger" :disabled="!selectedProducts || !selectedProducts.length" @click="confirmDeleteSelected" />
            </div>
          </template>

          <template #end>
            <FileUpload mode="basic" accept="image/*" :max-file-size="1000000" label="Import" choose-label="Import" class="mr-2 inline-block" />
            <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)" />
          </template>
        </Toolbar>

        <DataTable ref="dt" v-model:selection="selectedProducts" :value="products" data-key="id" :paginator="true" :rows="10" :filters="filters" paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rows-per-page-options="[5, 10, 25]" current-page-report-template="Showing {first} to {last} of {totalRecords} products" responsive-layout="scroll">
          <template #header>
            <div class="flex-column flex md:justify-content-between md:align-items-center md:flex-row">
              <h5 class="m-0">
                Manage Products
              </h5>
              <span class="block p-input-icon-left mt-2 md:mt-0">
                <i class="pi pi-search" />
                <InputText v-model="filters.global.value" placeholder="Search..." />
              </span>
            </div>
          </template>

          <Column selection-mode="multiple" header-style="width: 3rem" />
          <Column field="code" header="Code" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              <span class="p-column-title">Code</span>
              {{ slotProps.data.code }}
            </template>
          </Column>
          <Column field="name" header="Name" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              <span class="p-column-title">Name</span>
              {{ slotProps.data.name }}
            </template>
          </Column>
          <Column header="Image" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              <span class="p-column-title">Image</span>
              <img :src="`/demo/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="shadow-2" width="100">
            </template>
          </Column>
          <Column field="price" header="Price" :sortable="true" header-style="width:14%; min-width:8rem;">
            <template #body="slotProps">
              <span class="p-column-title">Price</span>
              {{ formatCurrency(slotProps.data.price) }}
            </template>
          </Column>
          <Column field="category" header="Category" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              <span class="p-column-title">Category</span>
              {{ slotProps.data.category }}
            </template>
          </Column>
          <Column field="rating" header="Reviews" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              <span class="p-column-title">Rating</span>
              <Rating :model-value="slotProps.data.rating" :readonly="true" :cancel="false" />
            </template>
          </Column>
          <Column field="inventoryStatus" header="Status" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              <span class="p-column-title">Status</span>
              <span :class="`product-badge status-${slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : ''}`">{{ slotProps.data.inventoryStatus }}</span>
            </template>
          </Column>
          <Column header-style="min-width:10rem;">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)" />
              <Button icon="pi pi-trash" class="p-button-rounded mt-2 p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
            </template>
          </Column>
        </DataTable>

        <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Product Details" :modal="true" class="p-fluid">
          <img v-if="product.image" :src="`/demo/images/product/${product.image}`" :alt="product.image" width="150" class="shadow-2 mb-5 mt-0 block mx-auto">
          <div class="field">
            <label for="name">Name</label>
            <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{ 'p-invalid': submitted && !product.name }" />
            <small v-if="submitted && !product.name" class="p-invalid">Name is required.</small>
          </div>
          <div class="field">
            <label for="description">Description</label>
            <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
          </div>

          <div class="field">
            <label for="inventoryStatus" class="mb-3">Inventory Status</label>
            <Dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" option-label="label" placeholder="Select a Status">
              <template #value="slotProps">
                <div v-if="slotProps.value && slotProps.value.value">
                  <span :class="`product-badge status-${slotProps.value.value}`">{{ slotProps.value.label }}</span>
                </div>
                <div v-else-if="slotProps.value && !slotProps.value.value">
                  <span :class="`product-badge status-${slotProps.value.toLowerCase()}`">{{ slotProps.value }}</span>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
            </Dropdown>
          </div>

          <div class="field">
            <label class="mb-3">Category</label>
            <div class="grid formgrid">
              <div class="field-radiobutton col-6">
                <RadioButton id="category1" v-model="product.category" name="category" value="Accessories" />
                <label for="category1">Accessories</label>
              </div>
              <div class="field-radiobutton col-6">
                <RadioButton id="category2" v-model="product.category" name="category" value="Clothing" />
                <label for="category2">Clothing</label>
              </div>
              <div class="field-radiobutton col-6">
                <RadioButton id="category3" v-model="product.category" name="category" value="Electronics" />
                <label for="category3">Electronics</label>
              </div>
              <div class="field-radiobutton col-6">
                <RadioButton id="category4" v-model="product.category" name="category" value="Fitness" />
                <label for="category4">Fitness</label>
              </div>
            </div>
          </div>

          <div class="formgrid grid">
            <div class="field col">
              <label for="price">Price</label>
              <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" :class="{ 'p-invalid': submitted && !product.price }" :required="true" />
              <small v-if="submitted && !product.price" class="p-invalid">Price is required.</small>
            </div>
            <div class="field col">
              <label for="quantity">Quantity</label>
              <InputNumber id="quantity" v-model="product.quantity" integeronly />
            </div>
          </div>
          <template #footer>
            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
            <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
          </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="align-items-center justify-content-center flex">
            <i class="pi mr-3 pi-exclamation-triangle" style="font-size: 2rem" />
            <span v-if="product">Are you sure you want to delete <b>{{ product.name }}</b>?</span>
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false" />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
          </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="align-items-center justify-content-center flex">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="product">Are you sure you want to delete the selected products?</span>
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false" />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
          </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/demo/styles/badges.scss';
</style>
