import{w as s}from"./index-df02d158.js";const c=(t,e)=>{const o=localStorage.getItem(t),r=o&&JSON.parse(o)||e,a=s(r);return a.subscribe(l=>{localStorage.setItem(t,JSON.stringify(l))}),a},n={}.VITE_AUTH_TOKEN||"",T=c("authToken",n),i={}.VITE_CCU3_URL||"",S=c("ccu3url",i);export{T as a,S as c};
