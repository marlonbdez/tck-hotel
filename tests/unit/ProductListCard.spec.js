import { shallowMount } from '@vue/test-utils'
import ProductListCard from '@/components/ProductListCard.vue'

const item = {
  name: 'Lorem Ipsum',
  description: 'Veritatis tempore nam ea, earum quos accusamus consectetur quae quidem exercitationem.',
  image: '',
  food_pairing: ['voluptatum', 'suscipit', 'afeds'],
  abv: 4
}

describe('ProductListCard.vue', () => {
  it('renders title and description of a drink product', () => {
    const wrapper = shallowMount(ProductListCard, {
      propsData: { item }
    })
    expect(wrapper.find('.product-list-card__title').text()).toMatch(item.name)
    expect(wrapper.find('.product-list-card__description').text()).toMatch(item.description)
  })

  it('renders a comma separated string of a food pairing array', () => {
    const wrapper = shallowMount(ProductListCard, {
      propsData: { item }
    })
    const foodPairing = item.food_pairing.slice()
    const lastItem = foodPairing.shift()
    const checkFoodPairing = `${foodPairing.join(', ')} y ${lastItem}`
    expect(wrapper.find('.product-list-card__footer').text()).toMatch(checkFoodPairing)
  })

  it('renders a normal tag when abv is lower than five', () => {
    const wrapper = shallowMount(ProductListCard, {
      propsData: { item }
    })
    expect(wrapper.find('.product-list-card__info--normal').exists()).toBeTruthy()
  })

  it('renders a warning tag when abv is between five and ten', () => {
    item.abv = 6
    const wrapper = shallowMount(ProductListCard, {
      propsData: { item }
    })
    expect(wrapper.find('.product-list-card__info--warning').exists()).toBeTruthy()
  })

  it('renders an alert tag when abv is greater than ten', () => {
    item.abv = 11
    const wrapper = shallowMount(ProductListCard, {
      propsData: { item }
    })
    expect(wrapper.find('.product-list-card__info--alert').exists()).toBeTruthy()
  })
})
