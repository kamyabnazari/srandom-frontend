import { mount } from '@vue/test-utils'
import SongCardComponent from '@/components/SongCardComponent'
import FavoriteListItemComponent from '@/components/FavoriteListItemComponent'

describe('Testing SongCardComponent.vue', () => {
  it('should render a song card for each favorite song', () => {
    const wrapper = mount(FavoriteListItemComponent, {
      propsData: {
        songs: [
          {
            id: 1,
            title: 'Heart Attack',
            author: 'Loredana X Noizy',
            releaseYear: 2022,
            songLink: 'yt',
            isOriginal: 'false',
            isFavorite: 'false'
          },
          {
            id: 2,
            title: 'Tequila',
            author: 'Tayna',
            releaseYear: 2022,
            songLink: 'yt',
            isOriginal: 'false',
            isFavorite: 'false'

          }
        ]
      }
    })
    const songCards = wrapper.findAllComponents(SongCardComponent)
    expect(songCards.length).toBe(2)
  })
})
