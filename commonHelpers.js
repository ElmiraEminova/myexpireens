import{S as c,i as l}from"./assets/vendor-4a0f1509.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=document.querySelector(".empty-text"),u=document.querySelector(".reviews-list"),d=document.querySelector(".reviews-navigation");function p(){return fetch("https://portfolio-js.b.goit.study/api/reviews",{method:"GET"}).then(r=>(r.ok||(l.error({message:"Sorry, there are no reviews"}),a.classList.remove("is-hidden")),r.json()))}const f=s=>s.reduce((r,i)=>r+`<li class="reviews-item swiper-slide">
    <p class="reviews-text">${i.review}</p>
    <div class="reviewer">
    <img src="${i.avatar_url}" alt="${i.author}" class="reviewer-img">
    <h3 class="reviewer-name">${i.author}</h3>
    </div>
    </li>`,"");p().then(s=>{const r=f(s);u.insertAdjacentHTML("beforeend",r),new c(".mySwiper",{slidesPerView:1,spaceBetween:10,breakpoints:{360:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:1,spaceBetween:0},1280:{slidesPerView:2,spaceBetween:32}},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}).catch(s=>{d.classList.add("is-hidden")});
//# sourceMappingURL=commonHelpers.js.map
