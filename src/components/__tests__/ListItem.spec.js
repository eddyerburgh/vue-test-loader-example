import { shallow } from 'vue-test-utils'
import List from '../List.vue'

describe('ListItem.vue', () => {
  test('renders a div', () => {
    const item = {
      text: 'item text'
    }
    const wrapper = shallow(List, { propsData: { item } } )
    expect(wrapper.is('div')).toBe(true)
  })
})