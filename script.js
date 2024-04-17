let navHome = document.querySelector(".nav-home"),
    navHomeList = navHome.querySelectorAll("li"),
    totalNavHomeList = navHomeList.length,
    allSection = document.querySelectorAll(".section-home"),
    totalSection = allSection.length;


for (let i = 0; i <totalNavHomeList; i++) {
    const a = navHomeList[i].querySelector("a");
    a.addEventListener("click", function() {

        removeBackSection();
        for (let j = 0; j < totalNavHomeList; j++) {
            if (navHomeList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navHomeList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active")
        showSection(this);

    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}

function updateNavHome(element) {
    for (let i = 0; i < totalNavHomeList; i++) {
        navHomeList[i].querySelector("a").classList.remove("active");
        let target = element.getAttribute("href").split("#")[1];

        if (target === navHomeList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navHomeList[i].querySelector("a").classList.add("active");
        }
    }
}

// SWIPER SECTION //
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
