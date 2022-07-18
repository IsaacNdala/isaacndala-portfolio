<template>
    <div class="banner">
        <h6 class="banner__greetings">HELLO THERE I’M</h6>
        <h1 class="banner__name transition-mode" :class="{ 'dark-mode-color': darkMode }">Isaac Ndala</h1>
        <h3 class="banner__title transition-mode" :class="{ 'dark-mode-color': darkMode }">Full Stack Web Developer</h3>
        <p class="banner__description mt-3 transition-mode" :class="{ 'dark-mode-color': darkMode }">I’m a developer who loves to solve real problems by code and to delivery exceptional digital experiences.</p>
        <router-link class="banner__btn mt-5" to="/#contact">Contact Me</router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BannerComponent',
    computed: {
        ...mapState(['darkMode'])
    }
}
</script>

<style lang="scss">
.banner {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 7rem 1.5rem;

    .banner__name {
        font-weight: bold;
        font-size: 3rem;
    }

    .banner__greetings {
        color: #00da93;
        font-weight: 500;
    }

    .banner__title {
        font-weight: bold;
    }

    .banner__description {
        font-weight: 500;
    }

    .banner__btn {
        color: #131b20;
        padding: .8rem 2.5rem;
        background-color: #00da93;
        border-radius: 2rem;
        font-size: 1.1rem;
        font-weight: 500;
        box-shadow: 2px 2px 10px -2px rgb(0 0 0 / 25%);
    }

    @media(min-width: 768px) {
        .banner__name {
            font-size: 5rem;
        }

        .banner__greetings {
            color: #00da93;
        }

        .banner__description {
            max-width: 500px;
            font-size: 1.1rem;
        }

        .banner__btn-contact {
            color: #131b20;
            padding: .8rem 2.5rem;
            background-color: #00da93;
            border-radius: 2rem;
            font-size: 1.1rem;
            font-weight: 500;
        }   
    }
}
</style>