<script>
import RickAndMortyCharacters from './components/RickAndMortyCharacters.vue'
import ApiService from '@/api/ApiService'
import { ref, onMounted } from 'vue'

export default {
    components: {
        RickAndMortyCharacters
    },
    setup() {
        const characters = ref([])

        onMounted(async () => {
            const response = await ApiService.getCharacters()
            characters.value = response.results
        })

        return {
            characters, 
        }
    },
}
</script>

<template>
    <div class="view-container">
        <div class="container">
            <h1>Home View</h1>

            <RickAndMortyCharacters :characters="characters" />
        </div>

        <div class="sidebar">
            <h3>Sidebar</h3>
            <div class="content">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>