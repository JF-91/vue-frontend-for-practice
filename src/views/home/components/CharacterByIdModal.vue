<script>
import Modal from '@/common/modal/ModalSmall.vue'
import ApiService from '@/api/ApiService'

export default {
    components: {
        Modal,
    },
    props: {
        character: Object,
        
    },
    data () {
        return {
            show: false,
        }
    },
    methods: {
        open() {
            this.show = true
        },
        close() {
            this.show = false
        },
    }
}
</script>

<template>
    <Modal v-model:show="show">
        <h1 class="space-bottom">{{ character.name }}</h1>
        <img :src="character.image" alt="character.name" />
        <p>{{ character.species }}</p>
        <p>{{ character.status }}</p>
        <p>{{ character.species }}</p>
        <p>{{ character.gender }}</p>
        
        <a class="space-top" href="character.origin.url">{{ character.origin?.name }}</a>

    </Modal>
</template>

<style lang="scss" scoped>

</style>