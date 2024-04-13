<script>   
import CharactersByIdModal from './CharacterByIdModal.vue'
import ApiService from '@/api/ApiService'
export default {
    components: {
        CharactersByIdModal
    },
    props: {
        characters: Array,
    },    
    setup() {
        return {
            ApiService,
        }
    },    
    data() {
        return {
            show: false,
            character: Object,
        }
    },
    methods: {
        async getById(id) {
            const response = await ApiService.getCharacter(id)
            this.character = response
        },
        getCharacter(id) {
            this.$refs.rickAndMortyMByIdModal.open()
            this.getById(id)
        }
    }
}

</script>

<template>
    <div class="space-top x5">
        <h2>Rick and Morty Characters</h2>
   
        <div class="characters-container">
            <div 
                v-for="character in characters" 
                :key="character.id"
                class="character-card"
            >
                <img :src="character.image" alt="character.name" />
                <h3>{{ character.name }}</h3>
                <p>{{ character.species }}</p>
                <button @click="getCharacter(character.id)">get to character</button>
            </div>
        </div>
    </div>
    
    <CharactersByIdModal 
        ref="rickAndMortyMByIdModal"
        :character="character"/>
</template>

<style lang="scss" scoped>
.container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

}

.character-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1rem;
}

.characters-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

.character-card img {
    width: 100%;
    border-radius: 5px;
}
</style>