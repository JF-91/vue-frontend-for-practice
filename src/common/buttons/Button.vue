<script>
export default {
    props: {
        isRed: Boolean,
        isBlue: Boolean,
        isGreen: Boolean,
        IsOutlined: Boolean,
        isRounded: Boolean,
        isSmall: Boolean,
        isMedium: Boolean,
        isLarge: Boolean,
        isFullWidth: Boolean,
        isDisabled: Boolean,
    }    
}
</script>

<template>
    <button 
        :class="[
            isRed ? 'is-red' : '',
            isBlue ? 'is-blue' : '',
            isGreen ? 'is-green' : '',
            IsOutlined ? 'is-outlined' : '',
            isRounded ? 'is-rounded' : '',
            isSmall ? 'is-small' : '',
            isMedium ? 'is-medium' : '',
            isLarge ? 'is-large' : '',
            isFullWidth ? 'is-fullwidth' : '',
            isDisabled ? 'is-disabled' : '',
        ]"
    >
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s;
}

.is-red {
    background-color: red;
    color: white;
}

.is-blue {
    background-color: blue;
    color: white;
}

.is-green {
    background-color: green;
    color: white;
}

.is-outlined {
    background-color: transparent;
    border: 1px solid black;
    color: black;
}

.is-rounded {
    border-radius: 1rem;
}

.is-small {
    padding: 0.25rem 0.5rem;
}

.is-medium {
    padding: 0.5rem 1rem;
}

.is-large {
    padding: 1rem 2rem;
}

.is-fullwidth {
    width: 100%;
}

.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

button:hover {
    transform: scale(1.05);
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button:disabled {
    cursor: not-allowed;
}

button:disabled:hover {
    transform: none;
}

button:disabled:active {
    transform: none;
}

button:disabled:focus {
    outline: none;
}

</style>