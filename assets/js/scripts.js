// console.log("Czy działa js?");
let navigation = document.getElementById("navigation");
// console.dir(navigation);

window.addEventListener("scroll", function () {
    let scrollYposition = window.pageYOffset;
    // console.log(scrollYposition);

    if (scrollYposition >= 100) {
        navigation.classList.add("small");
    }
    else {
        navigation.classList.remove("small");
    }
})

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("menu-open");
})