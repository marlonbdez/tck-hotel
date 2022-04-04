import { shallowMount } from '@vue/test-utils'
import StarRating from '@/components/StarRating.vue'

describe('StarRating.vue', () => {
  it('renders a number of stars that matches with props.category passed', () => {
    const wrapper = shallowMount(StarRating, {
      propsData: { rating: 4 }
    })
    expect(wrapper.findAll('.star-rating__star')).toHaveLength(4)
  })
})
