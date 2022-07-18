<template>
    <nav class="list-items">
        <li><router-link class="list-items__link" @click="closeDrawer" :class="{ active: hash === '', 'dark-list-items__link': darkMode }" to="/">Home</router-link></li>
        <li><router-link class="list-items__link" @click="closeDrawer" :class="{ active: hash === '#about', 'dark-list-items__link': darkMode }" to="#about">About</router-link></li>
        <li><router-link class="list-items__link" @click="closeDrawer" :class="{ active: hash === '#portfolio', 'dark-list-items__link': darkMode }" to="#portfolio">Portfolio</router-link></li>
        <li><router-link class="list-items__link" @click="closeDrawer" :class="{ active: hash === '#contact', 'dark-list-items__link': darkMode }" to="#contact">Contact</router-link></li>
        <a class="list-items__btn-resume" href="https://drive.google.com/file/d/1a1K4LlqyIjXkc5uz19ET12Rijyzr3oVk/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
    </nav>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: 'NavItems',
    data() {
        return {
            hash: this.$route.hash
        }
    },
    computed: {
        ...mapState(['darkMode'])
    },
    watch: {
        '$route'(to) {
            this.hash = to.hash
        }
    },
    methods: {
        ...mapMutations(['closeDrawer'])
    }
}
</script>

<style lang="scss">
.list-items {
    
    .list-items__link {
        color: #131b20;
        transition: .3s color ease-in-out;
    }

    .dark-list-items__link {
        color: white;
    }

    .list-items__btn-resume {
        color: #131b20;
        padding: .8rem 2.5rem;
        background-color: #00da93;
        border-radius: 2rem;
        font-size: 1.1rem;
        font-weight: 500;
    }
}

</style>