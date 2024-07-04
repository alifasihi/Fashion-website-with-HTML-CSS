const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");
const products = document.querySelectorAll(".product-items");
const buttonsProductFilter = document.querySelectorAll(".filter");

//=========================================================================================

// filter Products

// const changeClass = (filter) => {
//   buttonsProductFilter.forEach((button) => {
//     if (button.dataset.filter === filter) {
//       button.classList.add("selected");
//     } else {
//       button.classList.remove("selected");
//     }
//   });
// };
// ----------------------------------------------------------

const filterHandeler = (event) => {
  const filter = event.target.dataset.filter;
  // changeClass(filter);

  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};
// ----------------------------------------------------------
// exclusive-offer Timer
const countDownDate = new Date("February 30, 2024 24:00:00").getTime();

const now = new Date().getTime();
const timeleft = countDownDate - now;

const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("mins").innerHTML = minutes;
document.getElementById("secs").innerHTML = seconds;

const myfunc = setInterval(function () {
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    // document.getElementById("end").innerHTML = "TIME UP!!";
  }
}, 1000);
// ----------------------------------------------------------
const start = () => {
  hamburgerIcon.addEventListener("click", function () {
    console.log(hamburgerMenu.style.transform);
    hamburgerMenu.classList.add("show-hamburger-menu");
  });

  crossIcon.addEventListener("click", function () {
    hamburgerMenu.classList.remove("show-hamburger-menu");
  });

  buttonsProductFilter.forEach((button) => {
    button.addEventListener("click", filterHandeler);
  });
};

window.addEventListener("load", start);
