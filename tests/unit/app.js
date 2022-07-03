import { mount } from '@vue/test-utils'
import App from '@/App'
import NavbarComponent from '@/components/NavbarComponent'

describe('Testing App.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(App)

    // then
    expect(wrapper.text()).toMatch('SrandomHomeSongsAboutUsRegisterLogin')
  })

  it('should have navbar component', () => {
    // when
    const wrapper = mount(App)

    // then
    const cardList = wrapper.findComponent(NavbarComponent)
    expect(cardList.exists()).toBeTruthy()
  })
})
