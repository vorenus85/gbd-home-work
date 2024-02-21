import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UsersList from '../../views/UsersList.vue'

describe('UsersList', () => {
  it('renders properly', () => {
    const wrapper = mount(UsersList, {
      global: {
        stubs: {
          DataTable: {
            template: '<span/>'
          },
          Column: {
            template: '<span/>'
          },
          Button: {
            template: '<span/>'
          }
        }
      }
    })

    const pageHeader = wrapper.find('.users-page-header')
    const addNewUserBtn = wrapper.find('#addNewUser')

    expect(wrapper.exists()).toBe(true)
    expect(pageHeader.exists()).toBe(true)
    expect(addNewUserBtn.exists()).toBe(true)
  })
})
