import axios from "axios";

class ApiService {

    constructor() { 
        this.baseUrl = ' https://rickandmortyapi.com/api';
        const isntance = axios.create({
            baseURL: this.baseUrl
        });

        this.axios = isntance;
    }

    async getCharacters() {
        const response = await this.axios.get('/character');
        return response.data;
    }

    async getCharacter(id) {
        const response = await this.axios.get(`/character/${id}`);
        return response.data;
    }

    async getEpisodes() {
        const response = await this.axios.get('/episode');
        return response.data;
    }

    async getEpisode(id) {
        const response = await this.axios.get(`/episode/${id}`);
        return response.data;
    }

    async getLocations() {
        const response = await this.axios.get('/location');
        return response.data;
    }

    async getLocation(id) {
        const response = await this.axios.get(`/location/${id}`);
        return response.data;
    }

    async getCharacterByName(name) {
        const response = await this.axios.get(`/character/?name=${name}`);
        return response.data;
    }

    async getCharacterByStatus(status) {
        const response = await this.axios.get(`/character/?status=${status}`);
        return response.data;
    }

    async getCharacterBySpecies(species) {
        const response = await this.axios.get(`/character/?species=${species}`);
        return response.data;
    }


}

export default new ApiService()