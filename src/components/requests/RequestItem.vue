<template>
  <li class="blue-silver-card">
    <div>
      <a :href="emailLink" class="email-link">{{ email }}</a>
    </div>
    <p class="message-text">{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return 'mailto:' + this.email;
    }
  }
}
</script>

<style scoped>
.blue-silver-card {
  margin: 1.2rem 0;
  border: 1.5px solid #bdd5ed;
  padding: 1.2rem 1.1rem 1.1rem 1.1rem;
  border-radius: 20px;
  background: linear-gradient(120deg, #edf4fb 50%, #deebf7 100%);
  box-shadow: 0 4px 16px 0 #b8cbe41b, 0 2px 12px 0 #cbe0fa18;
  position: relative;
  transition: box-shadow 0.3s, border-color 0.23s;
}

.blue-silver-card:hover {
  box-shadow: 0 8px 32px #b8cbe473, 0 2px 12px 0 #a0bde888;
  border-color: #a6bddd;
}

.email-link {
  color: #1b4578;
  background: linear-gradient(90deg, #e4eef9 60%, #cbe0fa 100%);
  padding: 0.42rem 0.96rem;
  border-radius: 1.5rem;
  font-weight: 700;
  font-size: 1.065rem;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 2px 8px #aecbe444;
  border: 1.2px solid #b6cce5;
  transition: background 0.22s, color 0.22s, box-shadow 0.22s;
}

.email-link:hover,
.email-link:active {
  color: #2360b2;
  background: linear-gradient(95deg,#dbeaf6 60%, #aed2f4 110%);
  box-shadow: 0 3px 13px #b7d4f258;
  border-color: #94bfdc;
}

.message-text {
  margin: 0.65rem 0 0 0;
  color: #244d6c;
  font-size: 1.01rem;
  line-height: 1.65;
  word-break: break-word;
  letter-spacing: 0.08rem;
}
</style>
