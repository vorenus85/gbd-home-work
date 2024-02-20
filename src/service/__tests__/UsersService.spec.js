import { describe, it, expect } from 'vitest'
import { UsersService } from '@/service/UsersService'

describe('UsersService test', () => {
  it('should match snapshot', () => {
    const actualResult = () => UsersService.getUsers()

    expect(actualResult()).toMatchSnapshot()
  })
})
