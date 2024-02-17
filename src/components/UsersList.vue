
<template>
    <div class="users-page">
        <div class="users-page-header">
            <Button type="button" @click="onAddNew" size="large" id="addNewUser">+ Add new user</button>
        </div>
        <DataTable v-model:selection="selectedUser" :value="users" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="id" header="id"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="permission" header="permission"></Column>
        </DataTable>
    </div>
</template>
<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { UsersService}  from '@/service/UsersService'

export default {
    components: {DataTable , Column, Button},
    data() {
        return {
            users: null
        }
    },
    mounted(){
        UsersService.getUsers().then((data) => (this.users = data));
    },
    methods: {
        onAddNew() {
            console.log('onAddNew')
        }
    }
}
</script>
<style lang="scss"></style>