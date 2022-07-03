import { mount } from '@vue/test-utils'
import Songs from '@/views/song/Songs'
import SongCreateFormComponent from '@/components/SongCreateFormComponent.vue'
import FavoriteListItemComponent from '@/components/FavoriteListItemComponent'

describe('Testing Songs.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Songs)

    // then
    expect(wrapper.text()).toMatch('Songs')
  })

  it('should have favorite card list component', () => {
    // when
    const wrapper = mount(Songs)

    // then
    const cardList = wrapper.findComponent(FavoriteListItemComponent)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have songs create form component', () => {
    // when
    const wrapper = mount(Songs)

    // then
    const createForm = wrapper.findComponent(SongCreateFormComponent)
    expect(createForm.exists()).toBeTruthy()
  })
})
