<template>
    <header class="nav-bar transition-mode" :class="{'dark-nav-bar': darkMode}">
        <router-link class="nav-bar__logo" to="/">IN</router-link>
        <nav-items class="d-none d-md-flex" />
        <theme-toggle-button class="d-none d-md-flex" />
        <nav-button @click ="toggleDrawer" class="d-md-none"/>
    </header>
</template>

<script>
import NavItems from '@/components/navigation/NavItems.vue'
import ThemeToggleButton from '@/components/navigation/ThemeToggleButton.vue'
import NavButton from '@/components/navigation/NavButton.vue'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: 'NavBar',
    components: {
        NavItems,
        ThemeToggleButton,
        NavButton
    },
    computed: {
        ...mapState(['darkMode'])
    },
    methods: {
        ...mapMutations(['toggleDrawer'])
    }
}
</script>

<style lang="scss">
.nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 2rem;
    height: 5rem;
    background-color: rgba(255, 255, 255, 0.683);
    position: absolute;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 90;

    .nav-bar__logo {
        font-size: 1.2rem;
        color: #00da93;
        border: 2px solid #00da93;
        padding: .7rem .8rem;
        border-radius: .25rem;
    }

    nav  {
        display: flex;
        align-items: center;

        li {
            margin-right: 1.8rem;
            font-size: 1.1rem;

            a {
                font-weight: 500;
                padding: .2rem;
            }

            .active {
                border-bottom: 2px solid #00da93;
            }
        }
    }
}

@media (min-width: 768px) {
    .nav-bar {
        height: 6rem;
    }
}

.dark-nav-bar {
    background-color: #131b20ab;
}
</style>