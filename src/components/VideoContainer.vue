<template>
    <div class="video-container" :class="{'show-video-container': showVideoContainer}">
        <div @click="closeVideoContainer" class="overlay"></div>
        <button @click="closeVideoContainer" class="video-container__btn-close">
            <i class="fi fi-br-cross d-flex"></i>
        </button>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="ratio ratio-16x9">
                    <iframe src="" title="YouTube video" id="project-video" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
 
export default {
    name: 'VideoContainer',
    computed: {
        ...mapState(['showVideoContainer', 'projectVideoURL'])
    },
    methods: {
        ...mapMutations(['closeVideoContainer'])
    }
}
</script>

<style lang="scss">
.video-container {
    min-height: 100vh;
    width: 100%;
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s all ease-in-out;
    opacity: 0;
    visibility: hidden;

    .overlay {
        min-height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        cursor: zoom-out;
    }

    .video-container__btn-close {
        color: white;
        border: none;
        padding: .5rem;
        background-color: transparent;
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 20;
    }

    .ratio {
        z-index: 20;
    }
}

.show-video-container {
    opacity: 1;
    visibility: visible;
}
</style>