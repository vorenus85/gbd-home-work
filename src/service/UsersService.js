export const UsersService = {
  getUsersData() {
    return [
      {
        id: 1,
        name: 'Tamás Szabó',
        email: 'tamas.szabo@gbd.hu',
        permission: 'admin'
      },
      {
        id: 2,
        name: 'Hajnalka Császár',
        email: 'hajnalka.csaszar@gbd.hu',
        permission: 'admin'
      },
      {
        id: 3,
        name: 'Katy Walters',
        email: 'katy.walters@gbd.hu',
        permission: 'agent'
      },
      {
        id: 4,
        name: 'Ron Booker',
        email: 'ron.booker@gbd.hu',
        permission: 'agent'
      },
      {
        id: 5,
        name: 'Jordan Lewis',
        email: 'jordan.lewis@gbd.hu',
        permission: 'agent'
      },
      {
        id: 6,
        name: 'Pamela Williams',
        email: 'pamela.williams@gbd.hu',
        permission: 'agent'
      }
    ]
  },

  getUsers() {
    return Promise.resolve(this.getUsersData())
  }
}
