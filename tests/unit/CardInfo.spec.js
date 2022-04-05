import { shallowMount } from '@vue/test-utils'
import CardInfo from '@/components/CardInfo.vue'

const item = {
  option: 'option-1',
  value: 'value-1',
  title: 'Lorem Ipsum',
  name: 'test',
  services: [
    'Veritatis tempore',
    'Earum quos accusamu',
    'Consectetur quae quidem exercitationem'
  ]
}

describe('CardInfo.vue', () => {
  it('renders a title of card ', () => {
    const wrapper = shallowMount(CardInfo, {
      propsData: { ...item }
    })
    expect(wrapper.find('.card-info__title').text()).toMatch(item.title)
  })

  it('renders a list of services', () => {
    const wrapper = shallowMount(CardInfo, {
      propsData: { ...item }
    })
    expect(wrapper.findAll('.card-info__services > li')).toHaveLength(item.services.length)
  })
})
