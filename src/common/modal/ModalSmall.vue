<script>
export default {
    props: {
        show: Boolean
    },
    emits: ['update:show'],
    methods: {
        close() {
            this.$emit('update:show', !this.show)
            },
        },
}
</script>

<template>
    <div class="modal-small"
        @click.self="close()" 
        v-if="show">
        <div class="modal-content">
            <div class="button-container">
               <button @click="close">x</button>
            </div>
            <slot></slot>
        </div>
    </div>

</template>


<style lang="scss" scoped>
.modal-small {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: 90%;
    max-width: 30rem;
}

.button-container {
    display: flex;
    justify-content: flex-end;
}


</style>