<template>
    <section id="portfolio" class="projects">
        <div class="container">
            <h2 class="section-title transition-mode" :class="{ 'dark-mode-color': darkMode }">My Portfolio</h2>
            <div class="section-title-line mb-2"></div>
            <p class="projects__title-description transition-mode" :class="{ 'dark-mode-color': darkMode }">Here is some of my projects, some 
                of them are open source you can contribute or show your suport o github.
            </p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3 pt-4">
                    <div class="projects__card">
                        <a href="https://wherechat.herokuapp.com/" class="card__link-overlay" :class="{ 'dark__card__link-overlay': darkMode }" target="_blank" rel="noopener noreferrer"></a>
                        <img src="@/assets/wherechat.png" alt="" class="projects__card__img">
                        <h3 class="projects__card__title">WhereChat</h3>
                        <p class="projects__card__description">
                            Wherechat is a chat application that allows users to
                            find and meet each other through their location on the map.
                        </p>
                        <ul>
                            <li class="projects__card__built-with">Vue.js</li>
                            <li class="projects__card__built-with">Node.js</li>
                            <li class="projects__card__built-with">Mongo DB</li>
                            <li class="projects__card__built-with">Socket.IO</li>
                            <li class="projects__card__built-with">Google Maps API</li>
                        </ul>
                        <div class="projects__card__links">
                            <a href="https://github.com/IsaacNdala/wherechat" target="_blank" rel="noopener noreferrer">
                                <i class="fi fi-brands-github"></i>
                            </a>
                            <a href="#" @click.prevent="openVideoContainer('https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6932077302415568896?compact=1')">
                                <i class="fi fi-rr-video-camera"></i>
                            </a>
                            <a href="https://wherechat.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <i class="fi fi-rr-link"></i>
                            </a>
                        </div>  
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 pt-4">
                    <div class="projects__card">
                        <a href="https://schoolgnet.herokuapp.com/login" class="card__link-overlay" :class="{ 'dark__card__link-overlay': darkMode }" target="_blank" rel="noopener noreferrer"></a>
                        <img src="@/assets/schoolg.jpg" alt="" class="projects__card__img">
                        <h3 class="projects__card__title">School G</h3>
                        <p class="projects__card__description">
                            Schoolg is a basic school management application that allow 
                            users to manage information of a educational instituation.
                        </p>
                        <ul>
                            <li class="projects__card__built-with">Node.js</li>
                            <li class="projects__card__built-with">MySQL</li>
                            <li class="projects__card__built-with">JavaScript</li>
                            <li class="projects__card__built-with">CSS</li>
                            <li class="projects__card__built-with">Bootstrap</li>
                            <li class="projects__card__built-with">PDFKit</li>
                        </ul>
                        <div class="projects__card__links">
                            <a href="https://github.com/IsaacNdala/schoolg" target="_blank" rel="noopener noreferrer">
                                <i class="fi fi-brands-github"></i>
                            </a>
                            <a href="#" @click.prevent="openVideoContainer('https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6913879432206118912?compact=1')">
                                <i class="fi fi-rr-video-camera"></i>
                            </a>
                            <a href="https://schoolgnet.herokuapp.com/login" target="_blank" rel="noopener noreferrer">
                                <i class="fi fi-rr-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 pt-4">
                    <div class="projects__card">
                        <a href="https://chocolifenet.netlify.app/index.html" class="card__link-overlay" :class="{ 'dark__card__link-overlay': darkMode }" target="_blank" rel="noopener noreferrer"></a>
                        <img src="@/assets/chocolife.png" alt="" class="projects__card__img">
                        <h3 class="projects__card__title">Chocolife</h3>
                        <p class="projects__card__description">
                            Chocolife is a template for an online
                            chocolate candy shop. The application also focuses on sharing
                            tips and advices to take care of mouth hygiene in addition to sell candies.
                        </p>
                        <ul>
                            <li class="projects__card__built-with">HTML</li>
                            <li class="projects__card__built-with">CSS</li>
                            <li class="projects__card__built-with">JavaScript</li>
                            <li class="projects__card__built-with">Bootstrap</li>
                        </ul>
                        <div class="projects__card__links">
                            <a href="https://github.com/IsaacNdala/chocolife" target="_blank" rel="noopener noreferrer">
                                <i class="fi fi-brands-github"></i>
                            </a>
                            <a href="https://chocolifenet.netlify.app/index.html" target="_blank" rel="noopener noreferrer">
                                <i class="fi fi-rr-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 pt-4">
                    <div class="projects__card">
                        <a href="https://www.cortextecnologias.com/" class="card__link-overlay" :class="{ 'dark__card__link-overlay': darkMode }" target="_blank" rel="noopener noreferrer"></a>
                        <img src="@/assets/cortex.png" alt="" class="projects__card__img">
                        <h3 class="projects__card__title">Córtex Website</h3>
                        <p class="projects__card__description">
                            This is the website of Cortéx Tecnologias a company focused on 
                            implementation of communications systems, information management 
                            and software development.
                        </p>
                        <ul>
                            <li class="projects__card__built-with">PHP</li>
                            <li class="projects__card__built-with">CSS</li>
                            <li class="projects__card__built-with">JavaScript</li>
                            <li class="projects__card__built-with">Bootstrap</li>
                        </ul>
                        <div class="projects__card__links">
                            <a href="https://www.cortextecnologias.com/" target="_blank" rel="noopener noreferrer">
                                <i class="fi fi-rr-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    name: 'ProjectSetion',
    computed: {
        ...mapState(['darkMode'])
    },
    methods: {
        ...mapMutations(['openVideoContainer'])
    }
}
</script>

<style lang="scss">
.projects {
    padding-top: 7rem;
    padding-left: 1rem;
    padding-right: 1rem;

    .projects__title-description {
        font-weight: 500;
        max-width: 500px;
    }

    .projects__card {     
        border-radius: .25rem;
        position: relative;
        overflow: hidden;
        height: 30rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0 2px 10px -2px rgb(0 0 0 / 25%);

        .card__link-overlay {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #131b2051;
            z-index: 2;
        }

        .dark__card__link-overlay {
            background-color: #131b209d;
            border: 2px solid #23323d;
        }

        .projects__card__img {
            z-index: 1;
            position: absolute;
            top: 70px;
            left: 1.5rem;
            width: 200%;
            border-radius: .25rem;
            transition: all .3s ease;
            box-shadow: 0 2px 10px -2px rgb(0 0 0 / 25%);
        }

        .projects__card__title {
            font-weight: bold;
            color: white;
            font-size: 1.3rem;
            z-index: 10;
        }

        .projects__card__description {
            color: white;
            z-index: 10;
        }

        ul {
            z-index: 10;
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;

            .projects__card__built-with {
                color: #fff;
                margin: .2rem;
                font-size: .85rem;
            }
        }

        .projects__card__links {
            z-index: 10;
            a {
                margin-right: 1rem;
                color: white;
                font-size: 1.4rem;
            }
        }
    }

    .projects__card:hover > .projects__card__img {
        width: 520px;
        left: .5rem;
    }
}

@media (min-width: 768px) {
    .projects {
        padding: 8rem 1rem;
    }
}
</style>