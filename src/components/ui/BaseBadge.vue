<template>
  <span class="blue-silver-badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
.blue-silver-badge {
  padding: 0.45rem 1.3rem;
  border-radius: 23px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-right: 0.5rem;
  display: inline-block;

  background: #183963 !important;
  color: #fff !important;

  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  border: none !important;
  box-shadow: none !important;
  text-shadow: none !important;
  transition: none;
}

.frontend,
.backend,
.career {
  background: #183963 !important;
  color: #fff !important;
  border: none !important;
  text-shadow: none !important;
  box-shadow: none !important;
}
</style>

