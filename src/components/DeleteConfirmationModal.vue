<template>
  <Dialog
    v-model:visible="visible"
    modal
    :style="{ width: '50vw' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <p class="m-0">
      Do you want to Delete <b>{{ userToDelete }}</b> from the List ?
    </p>
    <div class="flex justify-content-end gap-2">
      <Button type="button" label="Delete" @click="$emit('onDelete', users)"></Button>
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
    </div>
  </Dialog>
</template>
<script>
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

export default {
  components: { Dialog, Button },
  props: {
    modalVisibility: {
      type: Boolean,
      default: false
    },
    users: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      visible: this.modalVisibility
    }
  },
  computed: {
    userToDelete() {
      return this.users.length > 1 ? `${this.users.length} Selected Users` : this.users[0]?.name
    }
  }
}
</script>
