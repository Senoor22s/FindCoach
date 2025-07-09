<template>
  <div class="blue-silver-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.blue-silver-card {
  border-radius: 18px;
  box-shadow:
    0 3px 18px 0 rgba(158, 180, 220, 0.12),
    0 8px 36px 0 #d0e2f833;
  background: linear-gradient(120deg, #f6fafe 65%, #e3eef7 100%);
  padding: 1.4rem 1.3rem;
  margin: 2rem auto;
  max-width: 40rem;
  border: 1.2px solid #bfd4e5;
  backdrop-filter: blur(8px) saturate(125%);
  transition: box-shadow 0.25s, border-color 0.22s, background 0.23s;
}

.blue-silver-card:hover {
  box-shadow:
    0 10px 38px 0 #b7cfeaa8,
    0 4px 13px 0 #beddfb44;
  border-color: #95bdde;
  background: linear-gradient(118deg, #eef5fb 55%, #d2e4f5 100%);
}
</style>
