<script setup>
import CountryService from '@/service/CountryService'
import NodeService from '@/service/NodeService'

const floatValue = ref(null)
const autoValue = ref(null)
const selectedAutoValue = ref(null)
const autoFilteredValue = ref([])
const calendarValue = ref(null)
const inputNumberValue = ref(null)
const chipsValue = ref(null)
const sliderValue = ref(50)
const ratingValue = ref(null)
const colorValue = ref('#1976D2')
const radioValue = ref(null)
const checkboxValue = ref([])
const switchValue = ref(false)
const listboxValues = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
const listboxValue = ref(null)
const dropdownValues = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
const dropdownValue = ref(null)
const multiselectValues = ref([
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'China', code: 'CN' },
  { name: 'Egypt', code: 'EG' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' },
])

const multiselectValue = ref(null)
const toggleValue = ref(false)
const selectButtonValue1 = ref(null)
const selectButtonValues1 = ref([{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }])
const selectButtonValue2 = ref(null)
const selectButtonValues2 = ref([{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }])
const knobValue = ref(50)
const inputGroupValue = ref(false)
const treeSelectNodes = ref(null)
const selectedNode = ref(null)
const countryService = new CountryService()
const nodeService = new NodeService()

onMounted(() => {
  countryService.getCountries().then(data => (autoValue.value = data))
  nodeService.getTreeNodes().then(data => (treeSelectNodes.value = data))
})

function searchCountry(event) {
  setTimeout(() => {
    if (!event.query.trim().length) {
      autoFilteredValue.value = [...autoValue.value]
    }
    else {
      autoFilteredValue.value = autoValue.value.filter((country) => {
        return country.name.toLowerCase().startsWith(event.query.toLowerCase())
      })
    }
  }, 250)
}
</script>

<template>
  <div class="p-fluid grid">
    <div class="col-12 md:col-6">
      <div class="card">
        <h5>InputText</h5>
        <div class="formgrid grid">
          <div class="col-12 lg:col-4 mb-2 lg:mb-0">
            <InputText type="text" placeholder="Default" />
          </div>
          <div class="col-12 lg:col-4 mb-2 lg:mb-0">
            <InputText type="text" placeholder="Disabled" :disabled="true" />
          </div>
          <div class="col-12 lg:col-4 mb-2 lg:mb-0">
            <InputText type="text" placeholder="Invalid" class="p-invalid" />
          </div>
        </div>

        <h5>Icons</h5>
        <div class="formgrid grid">
          <div class="col-12 lg:col-4 mb-2 lg:mb-0">
            <span class="p-input-icon-left">
              <i class="pi pi-user" />
              <InputText type="text" placeholder="Username" />
            </span>
          </div>
          <div class="col-12 lg:col-4 mb-2 lg:mb-0">
            <span class="p-input-icon-right">
              <InputText type="text" placeholder="Search" />
              <i class="pi pi-search" />
            </span>
          </div>
          <div class="col-12 lg:col-4 mb-2 lg:mb-0">
            <span class="p-input-icon-left p-input-icon-right">
              <i class="pi pi-user" />
              <InputText type="text" placeholder="Search" />
              <i class="pi pi-search" />
            </span>
          </div>
        </div>

        <h5>Float Label</h5>
        <span class="p-float-label">
          <InputText id="username" v-model="floatValue" type="text" />
          <label for="username">Username</label>
        </span>

        <h5>Textarea</h5>
        <Textarea placeholder="Your Message" :auto-resize="true" rows="3" cols="30" />

        <h5>AutoComplete</h5>
        <AutoComplete id="dd" v-model="selectedAutoValue" placeholder="Search" :dropdown="true" :multiple="true" :suggestions="autoFilteredValue" field="name" @complete="searchCountry($event)" />

        <h5>Calendar</h5>
        <Calendar v-model="calendarValue" :show-icon="true" :show-button-bar="true" />

        <h5>Spinner</h5>
        <InputNumber v-model="inputNumberValue" show-buttons mode="decimal" />

        <h5>Chips</h5>
        <Chips v-model="chipsValue" />
      </div>

      <div class="card">
        <div class="grid">
          <div class="col-12">
            <h5>Slider</h5>
            <InputText v-model.number="sliderValue" />
            <Slider v-model="sliderValue" />
          </div>
          <div class="col-12 md:col-6">
            <h5>Rating</h5>
            <Rating v-model="ratingValue" />
          </div>
          <div class="col-12 md:col-6">
            <h5>ColorPicker</h5>
            <ColorPicker v-model="colorValue" style="width: 2rem" />
          </div>
          <div class="col-12">
            <h5>Knob</h5>
            <Knob v-model="knobValue" :step="10" :min="-50" :max="50" value-template="{value}%" />
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card">
        <h5>RadioButton</h5>
        <div class="grid">
          <div class="col-12 md:col-4">
            <div class="field-radiobutton mb-0">
              <RadioButton id="option1" v-model="radioValue" name="option" value="Chicago" />
              <label for="option1">Chicago</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-radiobutton mb-0">
              <RadioButton id="option2" v-model="radioValue" name="option" value="Los Angeles" />
              <label for="option2">Los Angeles</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-radiobutton mb-0">
              <RadioButton id="option3" v-model="radioValue" name="option" value="New York" />
              <label for="option3">New York</label>
            </div>
          </div>
        </div>

        <h5>Checkbox</h5>
        <div class="grid">
          <div class="col-12 md:col-4">
            <div class="mb-0 field-checkbox">
              <Checkbox id="checkOption1" v-model="checkboxValue" name="option" value="Chicago" />
              <label for="checkOption1">Chicago</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-checkbox mb-0">
              <Checkbox id="checkOption2" v-model="checkboxValue" name="option" value="Los Angeles" />
              <label for="checkOption2">Los Angeles</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-checkbox mb-0">
              <Checkbox id="checkOption3" v-model="checkboxValue" name="option" value="New York" />
              <label for="checkOption3">New York</label>
            </div>
          </div>
        </div>

        <h5>Input Switch</h5>
        <InputSwitch v-model="switchValue" />
      </div>

      <div class="card">
        <h5>Listbox</h5>
        <Listbox v-model="listboxValue" :options="listboxValues" option-label="name" :filter="true" />

        <h5>Dropdown</h5>
        <Dropdown v-model="dropdownValue" :options="dropdownValues" option-label="name" placeholder="Select" />

        <h5>MultiSelect</h5>
        <MultiSelect v-model="multiselectValue" :options="multiselectValues" option-label="name" placeholder="Select Countries" :filter="true">
          <template #value="slotProps">
            <div v-for="option of slotProps.value" :key="option.code" class="align-items-center text-primary border-round mr-2 px-2 bg-primary inline-flex py-1">
              <span :class="`mr-2 flag flag-${option.code.toLowerCase()}`" style="width: 18px; height: 12px" />
              <div>{{ option.name }}</div>
            </div>
            <template v-if="!slotProps.value || slotProps.value.length === 0">
              <div class="p-1">
                Select Countries
              </div>
            </template>
          </template>
          <template #option="slotProps">
            <div class="align-items-center flex">
              <span :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px; height: 12px" />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </MultiSelect>

        <h5>TreeSelect</h5>
        <TreeSelect v-model="selectedNode" :options="treeSelectNodes" placeholder="Select Item" />
      </div>

      <div class="card">
        <h5>ToggleButton</h5>
        <ToggleButton v-model="toggleValue" on-label="Yes" off-label="No" :style="{ width: '10em' }" />

        <h5>SelectButton</h5>
        <SelectButton v-model="selectButtonValue1" :options="selectButtonValues1" option-label="name" />

        <h5>SelectButton - Multiple</h5>
        <SelectButton v-model="selectButtonValue2" :options="selectButtonValues2" option-label="name" :multiple="true" />
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h5>Input Groups</h5>
        <div class="p-fluid grid">
          <div class="col-12 md:col-6">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <i class="pi pi-user" />
              </span>
              <InputText placeholder="Username" />
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon"><i class="pi pi-shopping-cart" /></span>
              <span class="p-inputgroup-addon"><i class="pi pi-globe" /></span>
              <InputText placeholder="Price" />
              <span class="p-inputgroup-addon">$</span>
              <span class="p-inputgroup-addon">.00</span>
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="p-inputgroup">
              <Button label="Search" />
              <InputText placeholder="Keyword" />
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon p-inputgroup-addon-checkbox">
                <Checkbox v-model="inputGroupValue" :binary="true" />
              </span>
              <InputText placeholder="Confirm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
