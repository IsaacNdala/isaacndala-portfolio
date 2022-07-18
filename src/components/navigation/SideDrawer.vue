<template>
    <div class="side-drawer d-md-none" :class="{'show-drawer': showDrawer, 'dark-show-drawer': showDrawer && darkMode, 'dark-side-drawer': darkMode }">
        <nav-items />
        <theme-toggle-button />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import NavItems from '@/components/navigation/NavItems.vue'
import ThemeToggleButton from '@/components/navigation/ThemeToggleButton.vue'

export default {
    name: 'SideDrawer',
    components: {
        NavItems,
        ThemeToggleButton
    },
    computed: {
        ...mapState(['showDrawer', 'darkMode'])    
    }
}
</script>

<style lang="scss">
.side-drawer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 75%;
    background-color: white;
    position: absolute;
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    transition: all .3s;
    transform: translateX(-100%);
    overflow: auto;
    padding: 2rem 0;
    z-index: 100;

    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        li {
            a.list-items__link {
                display: flex;
                justify-content: center;
                text-align: center;
                font-size: 1.2rem;
                font-weight: 500;
                padding: 1rem;
            }
        }

        .list-items__btn-resume {
            margin: 1rem;
            text-align: center;
        }
    }
    
}

.show-drawer {
    transform: translateX(0);
    box-shadow: 0 2px 10px -2px rgb(0 0 0 / 25%);
}

.dark-side-drawer {
    background-color: #131b20;
}

.dark-show-drawer {
    box-shadow: 0 2px 10px 20px rgb(0 0 0 / 25%);
}
</style>