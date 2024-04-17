let navHome = document.querySelector(".nav-home"),
    navHomeList = navHome.querySelectorAll("li"),
    totalNavHomeList = navHomeList.length,
    allSection = document.querySelectorAll(".section"),
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

/**** CALENDAR SECTION ****/
const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons i");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    })
});

// WORKING IN PROGRESS //
/* SWIPER SECTION 
var swiper = new swiper(".slide-content", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  }); */