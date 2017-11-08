<template>
  <div>
    <List :items="items" />
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'test-component',
  components: {
    List
  },
  data: () => ({
    items: [{ text: 'item 1' }, { text: 'item 2' }]
  })
}
</script>
