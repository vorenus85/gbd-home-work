<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '37vw' }">
    <p class="mt-0 dialog-text">
      Do you want to Delete <b>{{ userToDelete }}</b> from the List ?
    </p>
    <div class="flex justify-content-center align-items-center gap-3 pt-3">
      <Button
        class="flex-grow-1"
        type="button"
        label="Delete"
        @click="$emit('onDelete', users)"
        size="large"
        severity="info"
      ></Button>
      <Button
        class="flex-grow-1"
        type="button"
        label="Cancel"
        severity="secondary"
        @click="visible = false"
        size="large"
      ></Button>
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
<style lang="scss">
.dialog-text {
  font-size: 1.313rem;
  line-height: 1.5;
  text-align: center;
}
</style>
