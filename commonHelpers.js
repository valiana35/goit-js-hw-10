import"./assets/styles-d4e0ec65.js";import{f as m,i as h}from"./assets/vendor-651d7991.js";const c=document.querySelector("#datetime-picker"),a=document.querySelector("button[data-start]"),f=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");document.querySelectorAll("timer");class g{constructor(e){this.intervalId=null,this.tick=e}start(){const e=Date.now();this.intervalId=setInterval(()=>{const o=e-Date.now(),n=r(o);this.tick(n)},1e3)}stop(){clearInterval(this.intervalId),f.textContent="00",S.textContent="00",y.textContent="00",p.textContent="00"}}const v=new g(k);let s;a.addEventListener("click",()=>{v.start()});c.addEventListener("click",()=>{m(c,I)});function k(t){q(t)}function q({days:t,hours:e,minutes:o,seconds:n}){return t=t.toString().padStart(2,"0"),e=e.toString().padStart(2,"0"),o=o.toString().padStart(2,"0"),n=n.toString().padStart(2,"0"),`${t} ${e} ${o} ${n}`}const I={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s<new Date?(h.error({message:"Please choose a date in the future"}),a.disabled=!0):a.disabled=!1,console.log(t[0])}};function r(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:u,seconds:d}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=commonHelpers.js.map
