"use strict"
let links = document.querySelectorAll(".links")
let drops = document.querySelectorAll(".drop");
let collapse = document.getElementById("collapse");
let close = document.getElementById("close");
let open = document.getElementById("open");
let nav = document.querySelector("nav")


links.forEach((link, idx)=>{
    link.addEventListener("click", ()=> {
        link.nextElementSibling.classList.toggle("display")
        link.firstElementChild.classList.toggle("none")
        link.lastElementChild.classList.toggle("display")
    })
  })


collapse.addEventListener("click", ()=>{
    close.classList.toggle("none")
    open.classList.toggle("none")
    nav.classList.toggle("display")
})  
