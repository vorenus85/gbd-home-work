<template>
  <div class="users-page py-4 container ml-5">
    <div class="users-page-header pb-4 flex pl-3">
      <template v-if="selectedUser.length">
        <div class="selected-text mr-5">{{ selectedUser.length }} users selected</div>
        <Button
          @click="deleteAllSelected"
          label="Delete selected users"
          severity="secondary"
          class="outlined mr-3"
          size="large"
        >
          <template #icon>
            <img src="@/assets/svg/delete.svg" class="mr-3" />
          </template>
        </Button>
      </template>

      <Button
        class="ml-auto"
        type="button"
        @click="onAddNew"
        size="large"
        id="addNewUser"
        severity="primary"
        :disabled="editingRows.length"
        >+ Add new user</Button
      >
    </div>
    <DataTable
      v-model:editingRows="editingRows"
      paginator
      :rows="6"
      v-model:selection="selectedUser"
      editMode="row"
      :value="users"
      dataKey="id"
      tableStyle="min-width: 50rem"
      @row-edit-save="onRowEditSave"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column header="Users" style="width: 50%" class="pr-0 users-column">
        <template #body="slotProps">
          <UserData :name="slotProps.data.name" :email="slotProps.data.email" />
        </template>
        <template #editor="{ data }">
          <div class="flex">
            <div class="flex flex-column mr-3 flex-1">
              <label for="name">Name</label>
              <InputText
                id="name"
                v-model="data.name"
                size="large"
                aria-describedby="Name"
                placeholder="Enter Name"
              />
            </div>
            <div class="flex flex-column flex-1">
              <label for="email">Email</label>
              <InputText
                id="email"
                type="email"
                v-model="data.email"
                size="large"
                aria-describedby="Email"
                placeholder="Enter Email"
              />
            </div>
          </div>
        </template>
      </Column>
      <Column header="Permission" style="width: 25%">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.permission"
            :severity="permissionColor(slotProps.data.permission)"
          />
        </template>
        <template #editor="{ data }">
          <div class="flex flex-column mr-3">
            <label for="permission">Permission</label>
            <Dropdown
              id="permission"
              disabled
              v-model="data.permission"
              size="large"
              :options="permissions"
              optionValue="permission"
              optionLabel="value"
            />
          </div>
        </template>
      </Column>
      <Column style="width: 25%" class="vertical-align-bottom">
        <template #body="slotProps">
          <Button
            @click="editRow(slotProps.data)"
            severity="secondary"
            size="large"
            class="mr-2 outlined"
          >
            <template #icon>
              <img src="@/assets/svg/edit.svg" />
            </template>
          </Button>
          <Button
            @click="triggerDeleteModal(slotProps.data)"
            severity="secondary"
            size="large"
            class="ml-2 outlined"
          >
            <template #icon>
              <img src="@/assets/svg/delete.svg" />
            </template>
          </Button>
        </template>
        <template #editor="{ data }">
          <div class="flex">
            <Button
              size="large"
              severity="primary"
              class="mr-1"
              @click="handleRowEdit(data)"
              :disabled="isDisabledEditButton(data)"
              >{{ editRowButtonText }}</Button
            >
            <Button size="large" severity="secondary" lass="ml-1" @click="handleRowCancel(data.id)"
              >Cancel</Button
            >
          </div>
        </template>
      </Column>
    </DataTable>
    <delete-confirmation-modal
      v-if="showDeleteModal"
      @afterHide="showDeleteModal = false"
      :modalVisibility="showDeleteModal"
      :users="usersToDelete"
      @onDelete="onDeleteUsers($event)"
    />
  </div>
</template>
<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext'
import { UsersService } from '@/service/UsersService'
import UserData from '../components/UserData.vue'
import DeleteConfirmationModal from '../components/DeleteConfirmationModal.vue'

export default {
  components: {
    DataTable,
    Column,
    Button,
    Tag,
    InputText,
    UserData,
    Dropdown,
    DeleteConfirmationModal
  },
  data() {
    return {
      showDeleteModal: false,
      editingRows: [],
      usersToDelete: [],
      selectedUser: [],
      users: null,
      permissions: [
        { permission: 'admin', value: 'Admin' },
        { permission: 'agent', value: 'Agent' }
      ]
    }
  },
  computed: {
    editRowButtonText() {
      return this.editingRows[0]?.id === 0 ? 'Add' : 'Save'
    }
  },
  mounted() {
    UsersService.getUsers().then((data) => (this.users = data))
  },
  methods: {
    isDisabledEditButton(data) {
      if (data?.name === '' || data?.email === '') {
        return true
      }

      return false
    },
    onRowEditSave(event) {
      let { newData, index } = event

      this.users[index] = newData
    },
    editRow(data) {
      this.editingRows = [data]
    },
    onAddNew() {
      const newUser = { id: 0, email: '', name: '', permission: 'agent' }
      this.users = [newUser, ...this.users]
      this.editingRows = [newUser]
    },
    handleRowCancel(id) {
      if (id === 0) {
        this.users.shift()
        this.editingRows = []
      } else {
        this.editingRows = []
      }
    },
    permissionColor(permission) {
      return permission === 'admin' ? 'secondary' : 'primary'
    },
    triggerDeleteModal(data) {
      this.usersToDelete.push(data)
      this.showDeleteModal = true
      console.log('triggerDeleteModal')
    },
    onDeleteUsers(users) {
      if (users.length === 1) {
        this.deleteOneUser(users[0].id)
      }

      if (users.length > 1) {
        console.log(users.length)
      }
      this.showDeleteModal = false
      this.usersToDelete = []
    },
    deleteOneUser(id) {
      this.users = this.users.filter((user) => {
        return user.id !== id
      })
    },
    handleRowEdit(data) {
      this.users = this.users.map((user) => {
        if (user.id === data.id) {
          return { ...data }
        }
        return user
      })
      this.editingRows = []
    },
    deleteAllSelected() {
      console.log('deleteAllSelected')
    }
  }
}
</script>
<style lang="scss">
.users-page-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.users-column {
  &.p-cell-editing {
    display: block;
    margin-left: -3rem;
    width: calc(100% + 3rem) !important;
  }
}

.selected-text {
  font-size: 23px;
}
</style>
