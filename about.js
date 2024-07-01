const package=document.querySelector("#package");
const packages=document.querySelector("#packages");
const icon=document.querySelector("#package i");
const dropdown=document.querySelector("#dropdown");
const PACKAGE= document.querySelector("#PACKAGE");
const text=document.querySelector(".text");
const logo=document.querySelector("#logo");
const home=document.querySelector("#home");
const login=document.querySelector("#signup");

home.addEventListener("click",()=>{
    window.location.href="index.html";
})

login.addEventListener("click",()=>{
    window.location.href="login.html";
})

logo.addEventListener("click",()=>{
    location.replace(location.href);
})

packages.style.transition= "color .5s ease";
PACKAGE.addEventListener("mouseover",()=>{
    dropdown.classList.add("active");
    icon.style.transform= "translate(3px, 22px) rotate(180deg)";
    package.style.cursor= "pointer";
    packages.classList.add("active");
    packages.style.color= "rgb(211, 22, 22)";
})

PACKAGE.addEventListener("mouseout",()=>{
    dropdown.classList.remove("active");
    icon.style.transform= "translate(3px, 25px)";
    package.style.cursor= "default";
    packages.classList.remove("active");
    packages.style.color= "#fff";
})
