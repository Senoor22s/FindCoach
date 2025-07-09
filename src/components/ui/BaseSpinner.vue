<template>
  <div class="spinner">
    <div class="lds-roller silver-blue">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70px;
}

/* رنگ های متالیک و برجسته، واضح روی هر زمینه */
.lds-roller.silver-blue div:after {
  /* هر دایره یک gradian رنگی داره */
  background: linear-gradient(145deg, #3667bd 45%, #c9d7eb 90%);
  border: 1.1px solid #e3ebf6;
  box-shadow:
    0 2px 14px 2px #29477488,
    0 0 2.5px 0.5px #fff,
    0 0.9px 2px #c5d8fa;
  filter: drop-shadow(0 1.5px 4px #687e97bb);
  opacity: 0.94;
}
.lds-roller.silver-blue div:nth-child(1):after { background: linear-gradient(145deg, #5379d6 48%, #eaf2fe 95%);}
.lds-roller.silver-blue div:nth-child(2):after { background: linear-gradient(132deg, #3952a6 52%, #aec6e8 100%);}
.lds-roller.silver-blue div:nth-child(3):after { background: linear-gradient(125deg, #2c4172 60%, #d0d7e6 100%);}
.lds-roller.silver-blue div:nth-child(4):after { background: linear-gradient(123deg, #3466a5 60%, #c4deff 100%);}
.lds-roller.silver-blue div:nth-child(5):after { background: linear-gradient(130deg, #2677ae 53%, #e3effe 100%);}
.lds-roller.silver-blue div:nth-child(6):after { background: linear-gradient(134deg, #466283 45%, #c5dfff 100%);}
.lds-roller.silver-blue div:nth-child(7):after { background: linear-gradient(155deg, #183164 59%, #bcd8fa 100%);}
.lds-roller.silver-blue div:nth-child(8):after { background: linear-gradient(148deg, #3b508b 63%, #cedcf1 100%);}

.lds-roller {
  display: inline-block;
  position: relative;
  width: 66px;
  height: 66px;
}
.lds-roller div {
  animation: lds-roller 1.3s cubic-bezier(0.7,.3,.3,1) infinite;
  transform-origin: 33px 33px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin: -5.5px 0 0 -5.5px;
}

.lds-roller div:nth-child(1) { animation-delay: -0.14s;}
.lds-roller div:nth-child(2) { animation-delay: -0.28s;}
.lds-roller div:nth-child(3) { animation-delay: -0.42s;}
.lds-roller div:nth-child(4) { animation-delay: -0.56s;}
.lds-roller div:nth-child(5) { animation-delay: -0.70s;}
.lds-roller div:nth-child(6) { animation-delay: -0.84s;}
.lds-roller div:nth-child(7) { animation-delay: -0.98s;}
.lds-roller div:nth-child(8) { animation-delay: -1.12s;}

.lds-roller div:nth-child(1):after { top: 57px; left: 51px; }
.lds-roller div:nth-child(2):after { top: 62px; left: 42px;}
.lds-roller div:nth-child(3):after { top: 64px; left: 33px;}
.lds-roller div:nth-child(4):after { top: 62px; left: 24px;}
.lds-roller div:nth-child(5):after { top: 57px; left: 15px;}
.lds-roller div:nth-child(6):after { top: 49px; left: 9px;}
.lds-roller div:nth-child(7):after { top: 40px; left: 7px;}
.lds-roller div:nth-child(8):after { top: 31px; left: 10px;}

@keyframes lds-roller {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}

/* موبایل */
@media (max-width: 500px) {
  .lds-roller {
    width: 38px;
    height: 38px;
  }
  .lds-roller div:after {
    width: 7px;
    height: 7px;
    margin: -3.5px 0 0 -3.5px;
  }
}
</style>
