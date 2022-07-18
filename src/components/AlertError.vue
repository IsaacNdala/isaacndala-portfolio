<template>
    <div class="alert-error" :class="{'show-alert-error': showAlertError}">
        <button class="alert-error__btn-close" @click="closeAlertError">
            <i class="fi fi-br-cross d-flex" ></i>
        </button>
        <div class="alert-error__description-container">
            <h5>Upps!</h5>
            <p>{{ alertMessage }}</p>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'AlertError',
    computed: {
        ...mapState(['showAlertError', 'alertMessage'])
    },
    methods: {
        ...mapMutations(['closeAlertError'])
    }
}
</script>

<style lang="scss">
.alert-error {
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
    background-color: #f8d7da;
    box-shadow: 2px 2px 10px -2px rgb(0 0 0 / 25%);
    border: 1px solid #842029;;
    border-left: 4px solid #842029;;
    z-index: 200;
    transform: translateY(150%);
    transition: .3s all ease-out;

    .alert-error__btn-close {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: .1rem;
        background-color: transparent;
        border: none;
        font-size: .8rem;
        color: #842029;;
    }
}

.show-alert-error {
    transform: translateY(0);
}
</style>