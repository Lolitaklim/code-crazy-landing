// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth',
//     })
//   })
// })
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
        anchor.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href !== "#") {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar"
        }
    });
    var swiper = new Swiper(".mySwiper2", {
        pagination: {
            el: ".swiper-pagination"
        }
    });
    const cards = document.querySelectorAll(".card-plus");
    cards.forEach((card)=>{
        const top = card.querySelector(".top");
        const bottom = card.querySelector(".bottom");
        const plus = card.querySelector(".plus");
        top.addEventListener("click", function() {
            bottom.classList.add("expanded");
            plus.classList.add("hidden");
        });
    });
    const modal = document.getElementById("myModal");
    const btn1 = document.getElementById("openModalBtn1");
    const btn2 = document.getElementById("openModalBtn2");
    const span = document.getElementById("closeModalBtn");
    btn1.onclick = function() {
        modal.style.display = "block";
    };
    btn2.onclick = function() {
        modal.style.display = "block";
    };
    span.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) modal.style.display = "none";
    };
});

//# sourceMappingURL=index.88db5c57.js.map
