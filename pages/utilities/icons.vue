<script setup>
const icons = ref(null)
const filter = ref(null)

const filteredIcons = computed(() => {
  if (filter.value)
    return icons.value.filter(icon => icon.properties.name.includes(filter.value.toLowerCase()))
  else return icons.value
})

onMounted(() => {
  fetch('/demo/data/icons.json', { headers: { 'Cache-Control': 'no-cache' } })
    .then(res => res.json())
    .then((d) => {
      const data = d.icons.filter((value) => {
        return !value.icon.tags.includes('deprecate')
      })
      data.sort((icon1, icon2) => {
        if (icon1.properties.name < icon2.properties.name)
          return -1
        else if (icon1.properties.name > icon2.properties.name)
          return 1
        else return 0
      })

      icons.value = data
    })
})
</script>

<template>
  <div>
    <div class="card">
      <h3>Icons</h3>
      <p>
        PrimeVue components internally use <a href="https://github.com/primefaces/primeicons" class="text-primary font-medium hover:underline">PrimeIcons</a> library, the official icons suite from
        <a href="https://www.primetek.com.tr" class="text-primary font-medium hover:underline">PrimeTek</a>.
      </p>

      <h5>Download</h5>
      <p>PrimeIcons is available at npm, run the following command to download it to your project.</p>

      <CodeHighlight> npm install primeicons --save </CodeHighlight>

      <h5>Getting Started</h5>
      <p>PrimeIcons use the <strong>pi pi-&#123;icon&#125;</strong> syntax such as <strong>pi pi-check</strong>. A standalone icon can be displayed using an element like <i>i</i> or <i>span</i></p>

      <CodeHighlight> &lt;i class="pi pi-check"&gt;&lt;/i&gt; &lt;i class="pi pi-times"&gt;&lt;/i&gt; </CodeHighlight>

      <i class="pi pi-check" style="margin-right: 0.5rem" />
      <i class="pi pi-times" />

      <h5>Size</h5>
      <p>Size of the icons can easily be changed using font-size property.</p>

      <CodeHighlight> &lt;i class="pi pi-check"&gt;&lt;/i&gt; </CodeHighlight>

      <i class="pi pi-check" />

      <CodeHighlight> &lt;i class="pi pi-check" style="font-size: 2rem"&gt;&lt;/i&gt; </CodeHighlight>

      <i class="pi pi-check" style="font-size: 2rem" />

      <h5>Spinning Animation</h5>
      <p>Special pi-spin class applies continuous rotation to an icon.</p>
      <CodeHighlight> &lt;i class="pi pi-spin pi-spinner" style="font-size: 2rem"&gt;&lt;/i&gt; </CodeHighlight>

      <i class="pi pi-spin pi-spinner" style="font-size: 2rem" />

      <h5>List of Icons</h5>
      <p>
        Here is the current list of PrimeIcons, more icons are added periodically. You may also <a href="https://github.com/primefaces/primeicons/issues" class="text-primary font-medium hover:underline">request new icons</a> at the issue
        tracker.
      </p>

      <InputText v-model="filter" class="mb-5 mt-3 w-full p-3" placeholder="Search an icon" />

      <div class="grid text-center icons-list">
        <div v-for="icon of filteredIcons" :key="icon.properties.name" class="col-6 lg:col-3 sm:col-4 xl:col-2 pb-5">
          <i :class="`text-2xl mb-2 pi pi-${icon.properties.name}`" />
          <div>pi-{{ icon.properties.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icons-list {
    i {
        color: var(--text-color-secondary);
    }
}
</style>
