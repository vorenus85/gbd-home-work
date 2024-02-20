import { describe, it, expect, beforeEach, test } from 'vitest'

import { mount } from '@vue/test-utils'
import NameBadge from '../NameBadge.vue'

describe('NameBadge', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(NameBadge)
  })

  test.each`
    name                   | expected
    ${'Janos Peter Perge'} | ${'JP'}
    ${'Janos Perge'}       | ${'JP'}
    ${'Janos'}             | ${'J'}
    ${''}                  | ${''}
  `('shortens correctly, if name $name monogram will be $expected', async ({ name, expected }) => {
    await wrapper.setProps({ name })
    const el = wrapper.find('.name-badge')

    expect(el.exists()).toBe(true)
    expect(el.text()).toBe(expected)
  })

  it('should palette has 3 colors', async () => {
    await wrapper.setProps({ name: 'Janos Perge' })
    const palette = wrapper.vm.palette
    expect(palette.length).toBe(3)
  })

  test.each`
    color
    ${'#31F1AC'}
    ${'#1C40A3'}
    ${'#DE40A3'}
  `('should palette has color $color', async ({ color }) => {
    await wrapper.setProps({ name: 'Janos Perge' })

    const palette = wrapper.vm.palette

    expect(palette.includes(color)).toBe(true)
  })
})
