
<template>
    <div class="users-page py-4">
        <div class="users-page-header pb-4">
            <Button type="button" @click="onAddNew" size="large" id="addNewUser">+ Add new user</button>
        </div>
        <DataTable v-model:selection="selectedUser" :value="users" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column header="Users">
                <template #body="slotProps">
                    <UserData :name="slotProps.data.name" :email="slotProps.data.email"/>
                </template>
                <template #editor="{ data }">
                    <InputText v-model="data.name" />
                    <InputText v-model="data.email" />
                </template>
            </Column>
            <Column header="Permission">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.permission" :severity="permissionColor(slotProps.data.permission)"  />
                </template>
            </Column>
            <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
        </DataTable>
    </div>
</template>
<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext'
import { UsersService}  from '@/service/UsersService'
import UserData from './UserData.vue';

export default {
    components: {DataTable , Column, Button, Tag, InputText, UserData},
    data() {
        return {
            editingRows: [],
            selectedUser: {},
            users: null
        }
    },
    mounted(){
        UsersService.getUsers().then((data) => (this.users = data));
    },
    methods: {
        onRowEditSave(event) {
            let { newData, index } = event;

            this.users[index] = newData;
        },
        onAddNew() {
            console.log('onAddNew')
        },
        permissionColor(permission){
            return permission === "admin" ? "secondary" : "primary"
        },
        handleEditUser(){
            console.log("handleEditUser")
        },
        handleDeleteUser(id){
            console.log("handleDeleteUser", id)
        }
    }
}
</script>
<style lang="scss" scoped>
.users-page-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>