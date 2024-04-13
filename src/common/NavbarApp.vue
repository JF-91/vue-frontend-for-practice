<script>
export default {
    
}
</script>

<template>
    <div class="navbar-container">
        <div>
            <h4>Logo.</h4>
        </div>

        <div class="list-buttons-links-container">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>

                <li>
                    <router-link to="/about">About</router-link>
                </li>

                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f1f1f1;
}

.list-buttons-links-container ul {
    display: flex;
    list-style: none;
}
</style>