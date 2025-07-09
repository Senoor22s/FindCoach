<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="silver-dialog-backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show" class="silver-dialog">
        <header>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu v-if="!fixed">
          <slot name="actions">
            <base-button @click="tryClose">Close</base-button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close'],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit('close');
    },
  },
};
</script>
<style scoped>
.silver-dialog-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(41, 61, 92, 0.34); /* آبی تیره و شفاف */
  backdrop-filter: blur(3.7px);
  z-index: 10;
}

.silver-dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 16px;
  border: 1.6px solid #b3cbeb;
  box-shadow: 0 6px 28px 4px #628cbf69, 0 2px 12px #dadfe68f;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: rgba(247, 250, 254, 0.88);
  backdrop-filter: blur(18px) saturate(1.26); /* افکت شیشه‌ای */
  transition: box-shadow .18s;
}

.silver-dialog header {
  /* گرادیان آبی-نقره‌ای مدرن */
  background: linear-gradient(
    92deg,
    #6e91c9 16%,
    #c2d2ee 58%,
    #ffffff 100%);
  color: #18355a;
  font-weight: 700;
  font-size: 1.15rem;
  width: 100%;
  padding: 1.13rem 1rem 1rem;
  letter-spacing: 0.04em;
  border-bottom: 1.2px solid #b5cae6;
  box-shadow: 0 2px 8px #a9b8cc33;
}

.silver-dialog header h2 {
  margin: 0;
  font-size: 1.13em;
}

.silver-dialog section {
  padding: 1.25rem 1.3rem 1rem 1.3rem;
  color: #183555;
  font-size: 1.03rem;
  background: transparent;
}

.silver-dialog menu {
  text-align: right;
  padding: 0.9rem 1.3rem;
  background: transparent;
  border-top: 1px solid #d0e0f1;
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.82);
}

.dialog-enter-active {
  transition: all 0.3s cubic-bezier(.4,.8,.3,1);
}
.dialog-leave-active {
  transition: all 0.24s cubic-bezier(.4,.7,.5,1);
}
.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  .silver-dialog {
    left: calc(50% - 19rem);
    width: 38rem;
  }
}
</style>
