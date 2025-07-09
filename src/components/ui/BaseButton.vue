<template>
  <button v-if="!link" :class="['blue-silver-btn', mode]">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="['blue-silver-btn', mode]">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
.blue-silver-btn {
  text-decoration: none;
  padding: 0.7rem 1.43rem;
  font: inherit;
  background: linear-gradient(95deg, #e7f0fc 67%, #d0e1ef 100%);
  border: 1.5px solid #b7cadd;
  color: #29518d;
  cursor: pointer;
  border-radius: 24px;
  margin-right: 0.5rem;
  display: inline-block;
  box-shadow: 0 2px 10px #c3d8ee45, 0 1.5px 6px #aac6e822;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.23s cubic-bezier(.4,.8,.3,1);
}

.blue-silver-btn:hover,
.blue-silver-btn:active {
  background: linear-gradient(95deg, #cbe5fd 60%, #b4d0f3 120%);
  color: #1b3975;
  border-color: #83b4e2;
  box-shadow: 0 5px 15px #94b6df77, 0 2.5px 10px #79a6e251;
}

.flat {
  background: transparent;
  color: #427cd8;
  border: none;
  box-shadow: none;
  font-weight: 600;
}

.flat:hover,
.flat:active {
  background: linear-gradient(90deg,#e3ecfb 70%,#c5dff8 100%);
  color: #124078;
  box-shadow: 0 2px 10px #bad6f421;
}

.outline {
  background: transparent;
  border: 1.5px solid #9ab5db;
  color: #2760a2;
  font-weight: 600;
}

.outline:hover,
.outline:active {
  background: linear-gradient(91deg, #eef6fd 60%, #c7daf3 100%);
  color: #19487b;
  border-color: #7aa1d0;
  box-shadow: 0 3px 9px #d1e5fa33;
}
</style>
