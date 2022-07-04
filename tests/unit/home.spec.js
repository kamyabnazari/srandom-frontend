import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Testing Home.vue', () => {
  it('should show page title and Button', () => {
    // when
    const wrapper = mount(Home)

    // then
    expect(wrapper.text()).toMatch('Click to get your random song')
  })
})
