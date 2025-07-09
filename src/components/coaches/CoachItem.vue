<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="coachContactLink">Contact</base-button>
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');

li {
  margin: 1rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.2rem 1.5rem 1.2rem;
  background: linear-gradient(120deg, #f5faff 84%, #e3e9f2 100%);
  border: 1.5px solid #bdd5ed;
  box-shadow: 0 2px 22px 0 #c3ddfb23, 0 1.5px 11px #c5dafc13;
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, sans-serif;
  transition: box-shadow 0.18s, border 0.17s, background 0.19s;
}

li:hover,
li:focus-within {
  box-shadow: 0 4px 40px 0 #72b3f340, 0 0 10px #2360b29c;
  border-color: #2360b2;
  background: linear-gradient(120deg, #e5f2ff 90%, #cbe0fa 120%);
}

h3 {
  font-size: 1.42rem;
  margin: 0.5rem 0 0.18rem 0;
  font-weight: 700;
  color: #1d3557;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 12px #e3eeff22;
  font-family: inherit;
}

h4 {
  margin: 0.18rem 0 0.5rem 0;
  font-size: 1.02rem;
  color: #2360b2;
  font-weight: 500;
  letter-spacing: 0.01em;
  font-family: inherit;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.7rem;
  margin-top: 0.9rem;
}

div {
  margin: 0.44rem 0 0 0;
}

/* هیچ استایلی برای badge یا دکمه اضافه نشد */

</style>