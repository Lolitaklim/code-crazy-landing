document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){let t=this.getAttribute("href");if("#"!==t){let n=document.querySelector(t);n&&(e.preventDefault(),n.scrollIntoView({behavior:"smooth"}))}})}),new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",type:"progressbar"}}),new Swiper(".mySwiper2",{pagination:{el:".swiper-pagination"}}),document.querySelectorAll(".card-plus").forEach(e=>{let t=e.querySelector(".top"),n=e.querySelector(".bottom"),o=e.querySelector(".plus");t.addEventListener("click",function(){n.classList.add("expanded"),o.classList.add("hidden")})});let e=document.getElementById("myModal"),t=document.getElementById("openModalBtn1"),n=document.getElementById("openModalBtn2"),o=document.getElementById("closeModalBtn");t.onclick=function(){e.style.display="block"},n.onclick=function(){e.style.display="block"},o.onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")}});
//# sourceMappingURL=index.4fb60de1.js.map
