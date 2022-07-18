<template>
    <button @click="toggleMode" class="theme-toggle-button">
        <i v-if="!darkMode" class="fi fi-rr-moon d-flex"></i>
        <i v-if="darkMode" class="fi fi-rr-sun d-flex dark-mode-color"></i>
    </button>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: 'ThemeToggleButton',
    computed: {
        ...mapState(['darkMode'])
    },
    methods: {
        ...mapMutations(['toggleMode']),
    }
}
</script>

<style lang="scss">
.theme-toggle-button {
    background-color: transparent;
    padding: .4rem;
    border: none;
    font-size: 1.5rem;
    color: #131b20;
}
</style>