<template>
    <div class="alert-s" :class="{'show-alert-success': showAlertSuccess}">
        <button class="alert-s__btn-close" @click="closeAlertSuccess">
            <i class="fi fi-br-cross d-flex" ></i>
        </button>
        <div class="alert-s__description-container">
            <h5>Thanks You!</h5>
            <p>{{ alertMessage }}</p>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'AlertSuccess',
    computed: {
        ...mapState(['showAlertSuccess', 'alertMessage'])
    },
    methods: {
        ...mapMutations(['closeAlertSuccess'])
    }
}
</script>

<style lang="scss">
.alert-s {
    position: relative;
    border-radius: .25rem;
    padding: 1rem;
    width: 20rem;
    min-height: 7rem;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #d1faea;
    box-shadow: 2px 2px 10px -2px rgb(0 0 0 / 25%);
    border: 1px solid #00da93;
    border-left: 4px solid #00da93;
    z-index: 200;
    transform: translateY(150%);
    transition: .3s all ease-out;

    .alert-s__btn-close {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: .1rem;
        background-color: transparent;
        border: none;
        font-size: .8rem;
        color: #036f52;
    }
}

.show-alert-success {
    transform: translateY(0);
}
</style>