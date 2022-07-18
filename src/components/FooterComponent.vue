<template>
    <footer class="footer">
        <div class="container d-flex flex-column align-items-center">
            <div class="footer__social-media">
                <a href="https://github.com/IsaacNdala" target="_blank" rel="noopener noreferrer" class="transition-mode" :class="{ 'dark-mode': darkMode }">
                    <i class="fi fi-brands-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/isaacndala" target="_blank" rel="noopener noreferrer" class="transition-mode" :class="{ 'dark-mode': darkMode }">
                    <i class="fi fi-brands-linkedin"></i>
                </a>
                <a href="https://twitter.com/IsaacNdala11" target="_blank" rel="noopener noreferrer" class="transition-mode" :class="{ 'dark-mode': darkMode }">
                    <i class="fi fi-brands-twitter"></i>
                </a>
                <a href="https://www.instagram.com/isaac.ndala111/" target="_blank" rel="noopener noreferrer" class="transition-mode" :class="{ 'dark-mode': darkMode }">
                    <i class="fi fi-brands-instagram"></i>
                </a>
            </div>
            <p class="footer__p transition-mode" :class="{ 'dark-mode': darkMode }">
                &copy; {{ year }} - Designed & Built by 
                <a href="https://github.com/IsaacNdala" target="_blank" class="text-success" rel="noopener noreferrer">Isaac Ndala</a>
            </p>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'FooterComponent',
    computed: {
        ...mapState(['darkMode']),
        year() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style lang="scss">
.footer {
    padding: 5rem 1rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer__social-media {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: .4rem;

        a {
            margin-right: 1.5rem;
            color: rgb(90, 88, 88);
            i {
                font-size: 1.2rem;
            }

            &:last-child {
                margin-right: 0;
            }
        }

        .dark-mode {
            color: white;
        }
    }

    .footer__p {
        font-weight: 500;
        color: rgb(90, 88, 88);
        margin-bottom: 0;
        font-size: .9rem;

        a {
            font-weight: bold;
        }
    }
    
    .dark-mode {
        font-weight: 300;
        color: white;
    }
}

@media (min-width: 768px) {
    .footer {
       padding: 2rem 1rem; 
    }
}
</style>
