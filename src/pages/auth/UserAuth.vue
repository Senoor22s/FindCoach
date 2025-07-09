<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <p
        v-if="!formIsValid"
      >Please enter a valid email and password (must be at least 6 characters long)</p>
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
    </form>
  </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        if (this.mode === 'login') {
        await this.$store.dispatch('auth/login', {
            email: this.email,
            password: this.password,
          });
        } else {
          await this.$store.dispatch('auth/signup', {
            email: this.email,
            password: this.password,
          });
        }
        this.$router.push('/coaches');
      } catch (error) {
        this.error = error.message || 'Failed to authenticate, try again';
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@500;700;900&family=Roboto:wght@500;700;900&display=swap');

form {
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1),
              0 0 20px rgba(173, 216, 230, 0.4);
  backdrop-filter: blur(8px) saturate(150%);
}

.form-control {
  margin: 0.8rem 0;
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  color: #12314d;
}

label {
  font-weight: 700;
  margin-bottom: 0.6rem;
  display: block;
  letter-spacing: 0.2px;
  color: #23517a;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.6rem 0.8rem;
  border: 1px solid rgba(173, 216, 230, 0.5);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #12314d;
  outline: none;
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: rgba(250, 246, 255, 0.7);
  box-shadow: 0 0 0 3px rgba(173, 216, 230, 0.6),
              0 2px 5px rgba(0, 0, 0, 0.15);
  outline: none;
}
</style>