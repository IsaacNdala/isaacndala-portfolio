import { createStore } from 'vuex'

const darkModeStorage = localStorage.getItem('darkMode')

const darkMode = darkModeStorage ? darkModeStorage : false

export default createStore({
  state: {
    alertMessage: '',
    showAlertSuccess: false,
    showAlertError: false,
    showLoader: false,
    projectVideoURL: '', 
    showVideoContainer: false,
    showDrawer: false,
    darkMode: darkMode === "true" ? true : false 
  },
  getters: {
  },
  mutations: {
    openAlertSuccess(state, message) {
      state.showAlertSuccess = true
      state.alertMessage = message
    },
    closeAlertSuccess(state) {
      state.showAlertSuccess = false
    },
    openAlertError(state, message) {
      state.showAlertError = true
      state.alertMessage = message
    },
    closeAlertError(state) {
      state.showAlertError = false
    },
    openLoader(state) {
      state.showLoader = true
    },
    closeLoader(state) {
      state.showLoader = false
    },
    openVideoContainer(state, projectVideoURL) {
      state.showVideoContainer = true
      state.projectVideoURL = projectVideoURL
      document.body.style.overflow = 'hidden'
      document.getElementById('project-video').setAttribute('src', projectVideoURL)
    },
    closeVideoContainer(state) {
      state.showVideoContainer = false
      document.body.style.overflow = 'auto'
      document.getElementById('project-video').setAttribute('src', '')
    },
    toggleDrawer(state) {
      state.showDrawer = !state.showDrawer
    },
    closeDrawer(state) {
      document.querySelector(".nav-button").classList.remove('close')
      state.showDrawer = false
    },
    toggleMode(state) {
      state.darkMode = !state.darkMode
      document.body.classList.toggle('dark-mode-bg-color')
      localStorage.setItem('darkMode', state.darkMode)
    }
  },
  actions: {
  },
  modules: {
  }
})
