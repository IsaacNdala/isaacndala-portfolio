<template>
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title transition-mode" :class="{ 'dark-mode-color': darkMode }">About Me</h2>
            <div class="section-title-line"></div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-7 py-4">
                    <p class="about-p transition-mode" :class="{ 'dark-mode-color': darkMode }">
                        Hello! My name is Isaac Ndala and I enjoy creating things that live on the internet. 
                        My interest in web development started back in 2018, in that time I was at high 
                        school and there was an initiative called CODIP, there I had the opportunity to learn the basic of HTML, CSS, JavaScript and PHP.
                    </p>

                    <p class="about-p transition-mode" :class="{ 'dark-mode-color': darkMode }">In my first work experience I had the opportunity to work as a frontend developer with 
                        a team that build management app based on web, where my role was to build and 
                        improve the UI of the products that were delivered to the clients.</p>

                    <p class="about-p transition-mode" :class="{ 'dark-mode-color': darkMode }">Now I’m looking for a new opportunity, I’m open for frontend, backend and full stack position.</p>

                    <p class="about-p transition-mode" :class="{ 'dark-mode-color': darkMode }">Actually I’ve been using a lot Node.js and Vue.js for creating 
                        full stack web applications. Here is a full list of my skills: </p>

                    <div class="row">
                        <div class="col-6">
                            <span class="about__skill-title transition-mode" :class="{ 'dark-mode-color': darkMode }">Languages:</span>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">HTML</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">CSS</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">JavaScript</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">PHP</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">C</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">C++</li>
                        </div>
                        <div class="col-6">
                            <span class="about__skill-title transition-mode" :class="{ 'dark-mode-color': darkMode }">Frameworks and Libraries:</span>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">Vue.js</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">Vuex</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">Node.js</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">Express</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">jQuery</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">Bootstrap</li>
                        </div>
                    </div>
                    
                    <div class="row mt-4">
                        <div class="col-6">
                            <span class="about__skill-title transition-mode" :class="{ 'dark-mode-color': darkMode }">Databases:</span>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">MySQL</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">MongoDB</li>
                        </div>
                        <div class="col-6">
                            <span class="about__skill-title transition-mode" :class="{ 'dark-mode-color': darkMode }">Others:</span> 
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">Git</li>
                            <li class="about__skill-list transition-mode" :class="{ 'dark-mode-color': darkMode }">Command line</li>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 about-img-col pt-5">
                    <div class="about-img-container">
                        <img src="@/assets/image.jpg" alt="">
                    </div>
                    <div class="about-img-col__social-container">
                        <a href="https://github.com/IsaacNdala" class="transition-mode" target="_blank" rel="noopener noreferrer" :class="{ 'dark-mode': darkMode }">
                            <i class="fi fi-brands-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/isaacndala" class="transition-mode" target="_blank" rel="noopener noreferrer" :class="{ 'dark-mode': darkMode }">
                            <i class="fi fi-brands-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/IsaacNdala11" class="transition-mode" target="_blank" rel="noopener noreferrer" :class="{ 'dark-mode': darkMode }">
                            <i class="fi fi-brands-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/isaac.ndala111/" class="transition-mode" target="_blank" rel="noopener noreferrer" :class="{ 'dark-mode': darkMode }">
                            <i class="fi fi-brands-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'AboutComponent',
    computed: {
        ...mapState(['darkMode'])
    },
}
</script>

<style lang="scss">
.about {
    padding-top: 7rem;
    padding-right: 1rem;
    padding-left: 1rem;

    .about-p{
        font-weight: 500;
    }

    .about__skill-title {
        font-weight: 500;
    }

    .about__skill-list {
        list-style: none;
        font-size: .85rem;
        font-weight: 500;
    }

    .about__skill-list::before {
        content: "▹";
        left: 0px;
        color: #09ba7f;
        margin-right: .7rem;
    }
    
    .about-img-col {
        display: flex;
        align-items: center;
        flex-direction: column;

        .about-img-col__social-container {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 5rem;

            a {
                margin-right: 1rem;
                color: rgb(0, 0, 0);
                i {
                    font-size: 1.5rem;
                }

                &:last-child {
                    margin-right: 0;
                }
            }

            .dark-mode {
                color: white;
            }
        }

        .about-img-container {
            border: 2px solid #00da93;
            border-radius: .25rem;
            width: 15rem;
            height: 15rem;
            position: relative;
            transition: all .3s ease;
    
            img {
                width: 15rem;
                border-radius: .25rem;
                position: absolute;
                top: -19px;
                left: -21px;
                transition: all .8s ease;
            }

            &:hover {
                width: 19rem;
                height: 19rem;
            }

            &:hover > img {
                width: 19rem;
            }
        }

        @media (min-width: 1200px) {
            .about-img-container {
                width: 18rem;
                height: 18rem;

                img {
                    width: 18rem;
                }
            } 
        }
    }
}

@media (min-width: 768px) {
    .about {
        padding: 8rem 1rem;
    }
}

@media (min-width: 992px) {
    .about {
        padding: 8rem 10rem;
    } 
}
</style>