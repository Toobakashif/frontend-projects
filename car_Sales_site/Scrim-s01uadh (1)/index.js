const menu = document.querySelector(".menu-bar")
      hearts = document.querySelectorAll('.far');
document.querySelector("#filter-option").addEventListener("click",() =>{
 menu.style.display= "block";
})

document.querySelector(".section").addEventListener("click",() =>{
 menu.style.display= "none";
})
function changeHeart(x) {
    x.classList.toggle("fas")
    x.classList.toggle("far")
}