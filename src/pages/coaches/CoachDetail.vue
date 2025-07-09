<template>
  <div v-if="selectedCoach">
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area" />
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
  <div v-else>
    <base-card>
  <base-spinner></base-spinner></base-card>
  </div>
</template>

<script>
import store from '../../store/store.js';
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/contact';
    }
  },
  async created() {
    if (this.$store.getters['coaches/coaches'].length === 0) {
      await this.$store.dispatch('coaches/setCoaches');
    }

    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
  beforeRouteEnter (to, from, next) {
    const exists = store.getters['coaches/coaches'].some(coach => coach.id === to.params.id);
    if (exists) {
      next();
    } else {
      next('/not-found');
    }
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@700;900&family=Roboto:wght@700;900&display=swap');

h2 {
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  color: #12314d;
  line-height: 1.18;
  letter-spacing: 0.5px;
  margin-bottom: 0.5em;
  text-shadow: 0 2px 10px #d0e2f766, 0 1px 1px #eef6ffab;
}

h3 {
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  font-weight: 700;
  font-size: 1.21rem;
  color: #23517a;
  margin-top: 0;
  margin-bottom: 0.5em;
  letter-spacing: 0.3px;
}
p {
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  font-size: 1.03rem;
  color: #26364d;
  text-align: justify;
  line-height: 1.7;
}
</style>