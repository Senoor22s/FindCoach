<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message.</p>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id
      });
      this.$router.replace('/coaches');

    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@500;900&family=Roboto:wght@500;900&display=swap');

form {
  margin: 1.55rem auto;
  padding: 1.35rem;
  border-radius: 18px;
  border: 1.7px solid #88a6be42;
  background: linear-gradient(108deg, #e7f1faee 65%, #d4e2efc7 120%);
  box-shadow: 0 2px 9px 0 #bcd0e966, 0 8px 32px #dae3eee7;
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  backdrop-filter: blur(6px) saturate(145%);
  transition: box-shadow 0.19s;
}

.form-control {
  margin: 0.77rem 0 1.14rem 0;
  position: relative;
}

label {
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  font-weight: 700;
  color: #175278;
  letter-spacing: .17px;
  margin-bottom: 0.39rem;
  display: block;
  font-size: 1.08rem;
  user-select: none;
  transition: color 0.18s;
}

input,
textarea {
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  display: block;
  width: 100%;
  font-size: 1rem;
  border: 1.35px solid #9bb8ca71;
  border-radius: 8.5px;
  background: linear-gradient(93deg, #f5fafd 75%, #dde9f4 110%);
  color: #23406a;
  padding: 0.38rem 0.54rem;
  box-shadow: 0 1.5px 8px #dbefff22;
  outline: none;
  transition: border-color 0.19s, box-shadow 0.23s, background 0.17s;
  margin-top: .18rem;
}

input:focus,
textarea:focus {
  border-color: #486aac;
  background: linear-gradient(94deg,#e6f2fa 68%, #c5daf5 122%);
  box-shadow: 0 1px 15px #bfcfe773, 0 3px 13px #b6cfe34e;
}

.errors {
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  font-weight: 700;
  color: #e42b3b;
  background: #f9e7e7d4;
  border-radius: 8px;
  padding: 0.5rem 0.7rem;
  margin: 0.7rem 0 1.12rem 0;
  border: 1px solid #fad5da;
  box-shadow: 0 1px 6px #f6aaaa26;
  text-align: center;
}

.actions {
  text-align: center;
  margin-top: 1.05rem;
}

</style>