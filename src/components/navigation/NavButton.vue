<template>
  <div class="nav-button">
    <span class="bar top" :class="{'dark-bar': darkMode }"></span>
    <span class="bar middle" :class="{'dark-bar': darkMode }"></span>
    <span class="bar bottom" :class="{'dark-bar': darkMode }"></span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "NavButton",
  data() {
    return {};
  },
  computed: {
    ...mapState(['darkMode'])
  },
  mounted() {
    const menu = document.querySelector(".nav-button");

    menu.addEventListener("click", () => {
      menu.classList.toggle("close");
    });
  }
};
</script>

<style>
.nav-button {
  position: relative;
  width: 35px;
  height: 30px;
  cursor: pointer;
}

.nav-button .bar {
  background-color: #374957;
  height: 2px;
  border-radius: 9px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-button .dark-bar {
  background-color: white;
}

.top {
  width: 80%;
  top: 18%;
  transition: all .28s;
}

.middle {
  top: 48%;
  width: 100%;
  transition: all .15s;
}

.bottom {
  top: 78%;
  width: 80%;
  transition: all .28s;
}

.close .top {
  left: 0;
  transform: translateX(0);
  transform: rotate(45deg);
  top: 48%;
}

.close .middle {
  opacity: 0;
  transform: translateX(18px);
}

.close .bottom {
    left: 0;
  transform: translateX(0);
  transform: rotate(-45deg);
  top: 48%;
}
</style>