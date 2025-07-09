<template>
  <header class="blue-silver-header">
    <nav>
      <h1>
        <router-link to="/">Find a Coach</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.blue-silver-header {
  width: 100%;
  height: 5.3rem;
  background: linear-gradient(120deg, rgba(224,234,247,0.94) 17%, rgba(197,213,233,0.92) 67%, rgba(182,203,226,0.97) 100%);
  box-shadow: 0 4px 18px 0 rgba(114,142,178,0.10), 0 2px 16px #a7c0dc33;
  backdrop-filter: blur(20px) saturate(170%);
  border-bottom: 2.7px solid #aecbeaaa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 24px 24px;
  z-index: 50;
  position: sticky;
  top: 0;
  overflow: hidden;
  box-sizing: border-box;
  transition: background 0.35s;
}

.blue-silver-header:before {
  content: "";
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  pointer-events: none;
  background: linear-gradient(112deg,rgba(255,255,255,0.17) 9%,rgba(159,178,213,0.13) 87%);
  z-index: 0;
}

header nav {
  width: 94%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: relative;
}

h1 {
  margin: 0;
  z-index: 2;
}

h1 a {
  color: #114577;
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  padding: 0.85rem 2.4rem;
  border-radius: 18px;
  background: linear-gradient(92deg,#e6f1fa 44%, #c2daf4 120%);
  transition: background 0.32s, box-shadow 0.28s, color 0.23s, border-color 0.25s;
  position: relative;
  z-index: 2;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  background: linear-gradient(97deg, #d4e8f7 26%, #c0defa 110%);
  color: #2360b2;
  box-shadow: 0 7px 28px #b7cfe6d0;
  border-color: #1d4173;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

li {
  margin: 0 0.7rem;
}

header a {
  text-decoration: none;
  font-weight: 500;
  font-size: 1.12rem;
  color: #296093;
  display: inline-block;
  padding: 0.67rem 1.38rem;
  border-radius: 13px;
  border: 1.5px solid transparent;
  backdrop-filter: blur(2px);
  background: transparent;
  transition: 
    color 0.21s,
    border-color 0.21s,
    background 0.19s,
    box-shadow 0.28s;
  position: relative;
  z-index: 2;
}

header a:hover,
header a:focus-visible {
  color: #175278;
  background: linear-gradient(97deg,#e4eef9 70%, #acd2f7 130%);
  border: 1.5px solid #96badd;
  box-shadow: 0 2px 10px #aacbe633;
  outline: none;
}

header a.router-link-active,
header a:active {
  color: #144071;
  background: linear-gradient(91deg, #d4e8f7 17%, #c0defa 98%);
  border: 1.7px solid #aec5e0;
  box-shadow: 0 1px 8px 0 #aecbe688;
  font-weight: 700;
  filter: brightness(1.08);
}

@media (max-width: 600px) {
  .blue-silver-header {
    height: 4rem;
    border-radius: 0 0 11px 11px;
  }
  h1 a {
    font-size: 1.08rem;
    padding: 0.48rem 1.09rem;
    border-radius: 9px;
  }
  header a {
    font-size: 0.97rem;
    padding: 0.42rem 0.9rem;
    border-radius: 7px;
  }
}
</style>
