<template>
  <section>
    <base-card>
      <h2>Register as coach now!</h2>
      <coach-form></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  provide() {
    return {
        saveData:this.saveData.bind(this)
    };
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach',data);
      this.$router.replace('/coaches');
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@700;900&family=Roboto:wght@700;900&display=swap');

h2 {
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  color: rgb(18, 45, 69);
  margin-bottom: 0.6em;
  line-height: 1.22;
}
</style>