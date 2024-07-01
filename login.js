document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.querySelector('input[type="password"]');
    
    togglePassword.addEventListener('click', () => {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? '\uD83D\uDC41' : '\uD83D\uDC40'; // Eye icons
    });
});

const package=document.querySelector("#package");
const packages=document.querySelector("#packages");
const icon=document.querySelector("#package i");
const dropdown=document.querySelector("#dropdown");
const PACKAGE= document.querySelector("#PACKAGE");
const text=document.querySelector(".text");
const logo=document.querySelector("#logo");

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
