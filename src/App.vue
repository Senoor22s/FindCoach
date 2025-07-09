<template>
  <div class="silver-app-bg">
    <the-header />
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  created() {
    this.$store.dispatch('auth/autoLogin');
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html, body, #app {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background: linear-gradient(135deg, #f0f2f5 0%, #e3e6ea 45%, #bfc9d1 100%);
  color: #23272e;
}

.silver-app-bg {
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(135deg, #f8fafd 0%, #e8e9ec 60%, #bcbbc5 100%);
  display: flex;
  flex-direction: column;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
