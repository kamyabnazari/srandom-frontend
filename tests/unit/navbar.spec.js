import { mount } from '@vue/test-utils'
import App from '@/App'
import NavbarComponent from '@/components/NavbarComponent'

describe('Testing Navigation bar in App.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(App)
    // then
    expect(wrapper.text()).toMatch('SrandomHomeSongsAbout')
  })

  it('should have navbar component', () => {
    // when
    const wrapper = mount(App)

    // then
    const navBar = wrapper.findComponent(NavbarComponent)
    expect(navBar.exists()).toBeTruthy()
  })
})
