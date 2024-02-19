import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NameBadge from '../NameBadge.vue'

describe('NameBadge', () => {
  it('renders properly', () => {
    const wrapper = mount(NameBadge, { props: { name: 'Janos Perge' } })
    const el = wrapper.find('.name-badge')

    expect(el.exists()).toBe(true)
    expect(el.text()).toBe('JP')
  })
})
