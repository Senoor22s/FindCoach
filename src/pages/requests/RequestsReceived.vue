<template>
  <div>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests">
        <request-item
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something failed!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@500;900&family=Roboto:wght@500;900&display=swap');

header {
  text-align: center;
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
}

h2, h3 {
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  font-weight: 900;
  color: #12314d;
  margin: 0.5em 0 0.7em 0;
  letter-spacing: 0.3px;
  line-height: 1.18;
  text-shadow: 0 1.5px 8px #d0e2f744;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
}

h3 {
  text-align: center;
  font-weight: 700;
  font-size: 1.15rem;
  color: #276094;
  text-shadow: none;
}

p, li {
  font-family: 'Vazirmatn', 'Roboto', 'Segoe UI', Tahoma, Geneva, Arial, sans-serif;
  font-size: 1.04rem;
  color: #223250;
  line-height: 1.7;
  margin-bottom: 0.2em;
  text-align: justify;
}
</style>