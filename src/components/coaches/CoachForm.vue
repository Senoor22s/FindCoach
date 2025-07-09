<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Lastname must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !rate.isValid}">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" @blur="clearValidity('rate')" />
      <p v-if="!rate.isValid">Rate must be greater than 0.</p>
    </div>
    <div class="form-control" :class="{invalid: !areas.isValid}">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">At least one expertise must be selected.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  inject: ['saveData'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };

      this.saveData(formData);
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
  color: #1c3350;
  letter-spacing: 0.01em;
  background: none;
  padding: 0;
  font-size: 1rem;
}

.form-control > div {
  display: flex;
  align-items: center;
  margin-bottom: 0.31rem;
}

input[type='checkbox'] + label {
  display: inline;
  margin: 0 0 0 0.32rem;
  font-weight: 500;
  font-size: 1rem;
  color: #244d6c;
  letter-spacing: 0.020em;
  border-radius: 1.25rem;
  padding: 0.12rem 0.36rem 0.12rem 0.44rem;
  background: linear-gradient(117deg, #f7fafc 80%, #e7f1fb 100%);
  transition: background 0.16s, color 0.16s, font-weight 0.14s, text-shadow 0.19s;
  text-shadow: 0 2px 9px #e3eeff12;
  cursor: pointer;
}

input[type='checkbox'] {
  accent-color: #3578d4;
  width: 18px;
  height: 18px;
  min-width: 18px;
  margin-right: 0.0rem;
  border-radius: 6px;
  border: 1.5px solid #a8c4df;
  background: linear-gradient(140deg, #edf4fb 75%, #d0e0f1 100%);
  box-shadow: 0 0 8px #c3ddf855;
  vertical-align: middle;
  transition: border 0.17s, box-shadow 0.15s;
}

input[type='checkbox']:focus {
  outline: #2678e7 solid 1.3px;
  box-shadow: 0 1px 8px #8ec0ff33;
}

input[type='checkbox']:checked + label {
  color: #2360b2;
  font-weight: 700;
  background: linear-gradient(95deg, #e4eef9 65%, #cbe0fa 130%);
  text-shadow:
    0 3px 10px #b7d4f240,
    0 2px 6px #b5cdfa23,
    0 0 2px #aed4fa0c;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #bdd5ed;
  font: inherit;
  border-radius: 8px;
  background: linear-gradient(112deg, #f9fbfd 80%, #deebf7 100%);
  padding: 0.4rem 0.7rem;
  transition: border 0.15s, box-shadow 0.15s;
  font-size: 1rem;
  color: #1e3556;
  box-shadow: 0 1px 8px #eaf5ff18;
}

input:focus,
textarea:focus {
  background: #f0f7ff;
  outline: none;
  border-color: #2360b2;
  box-shadow: 0 2px 10px #b6d8fd33;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: #1b4578;
  text-shadow: 0 2px 8px #e3eeff44;
  letter-spacing: 0.01em;
}

.invalid label {
  color: #c61132 !important;
}

.invalid input,
.invalid textarea {
  border: 1.2px solid #c61132;
}
</style>