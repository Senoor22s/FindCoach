<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
}
</script>

<style scoped>
h2 {
  color: #244d6c;
  font-size: 1.2rem;
  line-height: 1.65;
  word-break: break-word;
  letter-spacing: 0.08rem;
}
label {
  color: #244d6c;
  font-size: 0.8rem;
  line-height: 1.65;
  word-break: break-word;
  letter-spacing: 0.08rem;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
.filter-option input[type="checkbox"]:checked + label {
  font-weight: bold;
  color: #2769c7;
  text-shadow: 0 0 4px #e9f7ffcc, 0 2px 8px #c9d8ff33;
}
</style>