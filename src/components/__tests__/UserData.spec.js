import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserData from '../UserData.vue'

describe('UsersList', () => {
  it('renders properly', () => {
    const wrapper = mount(UserData, {
      global: {
        stubs: {
          NameBadge: {
            template: '<div>JP</div>'
          }
        }
      },
      props: {
        name: 'Janos Perge',
        email: 'janos.perge@gmail.com'
      }
    })

    const el = wrapper.find('.user-data')
    const elName = wrapper.find('.user-name')
    const elEmail = wrapper.find('.user-email')

    expect(el.exists()).toBe(true)
    expect(elName.text()).toBe('Janos Perge')
    expect(elEmail.text()).toBe('janos.perge@gmail.com')
  })
})
