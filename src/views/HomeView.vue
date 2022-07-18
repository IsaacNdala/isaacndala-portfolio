<template>
  <div class="home">
    <nav-bar />
    <side-drawer />
    <banner-component />
    <about-section />
    <projects-section />
    <contact-section />
    <footer-component />
    <video-container />
    <loader-component />
    <alert-success />
    <alert-error />
  </div>
</template>

<script>
import NavBar from '@/components/navigation/NavBar.vue'
import SideDrawer from '@/components/navigation/SideDrawer.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import VideoContainer from '@/components/VideoContainer.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
import AlertSuccess from '@/components/AlertSuccess.vue'
import AlertError from '@/components/AlertError.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    SideDrawer,
    BannerComponent,
    AboutSection,
    ProjectsSection,
    ContactSection,
    FooterComponent,
    VideoContainer,
    LoaderComponent,
    AlertSuccess,
    AlertError
  },
  computed: {
    ...mapState(['darkMode'])
  },
  mounted() {
    if(this.darkMode === true) {
      document.body.classList.add('dark-mode-bg-color')
    }

    if(this.darkMode === false) {
      document.body.classList.remove('dark-mode-bg-color')
    }
  }
}
</script>
