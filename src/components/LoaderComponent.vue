<template>
    <div class="loader" v-if="showLoader">
        <div class="cube">I</div>
        <div class="cube"></div>
        <div class="cube">N</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'LoaderComponent',
    computed: {
        ...mapState(['showLoader'])
    }
}
</script>

<style lang="scss">
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.634);
    z-index: 200;
    overflow: hidden;
}

.cube {
    border: 1px solid #00da93;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
    background-color:  #00da93;
    color: white;
    font-weight: bold;
    border-radius: 50%;
    font-size: .8rem;

    &:first-child {
        animation: left 1s infinite;
        background-color:  white;
        color: #75d5a2;
    }

    &:last-child {
        animation: right 1s infinite .5s;
        background-color: white;
        color: #00da93;
        margin-right: 0;
    }
}

@keyframes left {
    40% {
        transform: translateX(-50px);
    }
    50% {
        transform: translateX(0);
    }
}

@keyframes right {
    40% {
        transform: translateX(50px);
    }
    50% {
        transform: translateX(0);
    }
}
</style>