import"./assets/styles-d4e0ec65.js";import{f,i as h}from"./assets/vendor-651d7991.js";const y=document.querySelector("#datetime-picker"),r=document.querySelector("button[data-start]"),S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");r.addEventListener("click",v);let c;function v(){const t=setInterval(()=>{const a=Date.now(),s=c.getTime()-a;if(s>0){const e=n(s);S.textContent=o(e.days),g.textContent=o(e.hours),p.textContent=o(e.minutes),q.textContent=o(e.seconds)}else clearInterval(t)},1e3)}function o(t){return String(t).padStart(2,"0")}const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){c=t[0],c<new Date?(h.error({message:"Please choose a date in the future",position:"topRight"}),r.disabled=!0):r.disabled=!1,console.log(t[0])}};f(y,C);function n(t){const i=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:d,minutes:l,seconds:m}}console.log(n(2e3));console.log(n(14e4));console.log(n(2414e4));
//# sourceMappingURL=commonHelpers.js.map
