import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/NavbarComponent.vue'

describe('NavarComponent.vue Test', () => {
  it('check for correct Navbar component name', () => {
    // render the component
    const wrapper = shallowMount(Navbar)
    // check the name of  the component
    expect(wrapper.vm.$options.name).toMatch('NavbarComponent')
  })
})
