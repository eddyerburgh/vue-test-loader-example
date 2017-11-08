<template>
  <div>
    <ListItem v-for="item in items" key="item.text" item="item" />
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: 'test-component',
  props: ['items'],
  components: {
    ListItem
  }
}
</script>

<test>
import { shallow } from 'vue-test-utils'
import List from './List.vue'
import ListItem from './ListItem.vue'

describe('List.vue', () => {
  test('renders ListItem for each item', () => {
    const items = [{text: 'item 1'}, {text: 'item 2'}]
    const wrapper = shallow(List, { propsData: { items } } )
    expect(wrapper.findAll(ListItem)).toHaveLength(items.length)
  })
})
</test>
