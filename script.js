// drop down btn functions........................
let dropdown_btn = document.getElementById('dropdown-btn');
let dropdown_open_menu = document.getElementById('dropdown-open');
let open = true;

dropdown_btn.addEventListener("click", () => {
    if (open) {
        dropdown_open_menu.style.display = "block";
        dropdown_btn.style.background = "rgb(242, 242, 242)";
        dropdown_btn.classList.remove('text-hover');
        open = false;
    } else {
        dropdown_open_menu.style.display = "none";
        dropdown_btn.style.background = "none";
        dropdown_btn.classList.add('text-hover');
        open = true;
    }
});

let search_btn = document.getElementById('search-btn');
let search_box = document.getElementById('search-box');
let close_btn = document.getElementById('close-box');
let icons = document.querySelectorAll(".icons");
let uls = document.querySelectorAll(".uls");
let disktop_menu = document.getElementById('disktop-menu');
let mobile_menu = document.getElementById('mobile-menu');
let nav_open_btn = document.getElementById('nav-open-btn');

search_btn.addEventListener("click", () => {
    search_box.style.display = "block";
    icons.forEach((element) => {
        element.style.display = "none"
    });
    uls.forEach((element) => {
        element.style.display = "none"
    });
    disktop_menu.style.display = "none"
    mobile_menu.style.display = "none"
});
close_btn.addEventListener("click", () => {
    search_box.style.display = "none";
    icons.forEach((element) => {
        element.style.display = "block"
    });
    uls.forEach((element) => {
        element.style.display = "block"
    });
    if (window.outerWidth > 860) {
        disktop_menu.style.display = "block"
        window.location.reload()
    }
    if (window.outerWidth < 860) {
        if (nav_open_btn.classList.contains("fa-bars")) {
            mobile_menu.style.display = "none"
            window.location.reload()
        } else if (nav_open_btn.classList.contains("fa-close")) {
            mobile_menu.style.display = "block"
        }

    }
});

let nav_open = true;
nav_open_btn.addEventListener("click", () => {
    if (nav_open) {
        mobile_menu.style.display = "block";
        nav_open_btn.classList.remove("fa-bars")
        nav_open_btn.classList.add("fa-close")
        nav_open = false
    } else {
        mobile_menu.style.display = "none";
        nav_open_btn.classList.remove("fa-close")
        nav_open_btn.classList.add("fa-bars")
        nav_open = true
    }
})

let nav_dropdown_btn =document.querySelectorAll(".sec")
nav_dropdown_btn.forEach((element) => {
    element.addEventListener("click",()=>{
       element.classList.toggle("active")
    })
})