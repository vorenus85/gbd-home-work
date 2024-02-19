<template>
    <div class="user-data">
        <div class="user-data-left">
            <NameBadge :name="name" />
        </div>
        <div class="user-data-right">
            <span class="user-data-name">{{ name }}</span>
            <span class="user-data-email">{{ email }}</span>
        </div>
    </div>
</template>
<script>
import NameBadge from './NameBadge.vue';
export default {
    components: {NameBadge},
    props: {
        name: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss">
.user-data {
    display: flex;

    &-left{

    }

    &-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 1.5rem;
    }

    &-name {
        color: #000;
        font-size: 1.25rem;
        line-height: 1.625rem;
    }

    &-email {
        color: #BDBBBB;
        line-height: 1.625rem;
    }
}
</style>