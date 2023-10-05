import './style.css'
import { getMenu, getCurrentPage } from './Router';


document.querySelector('#app').innerHTML = /*html */`
<nav id="desktop-nav">
        <div class="logo">logo</div>
        <div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    <nav id="hamburger-nav">
        <div class="logo">logo</div>
        <div class="hamburger-menu">
            <div class="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="menu-links">
            ${getMenu()}
            </div>
        </div>
    </nav>
${getCurrentPage()}

`;
const hamburgerIconElem = document.querySelector(".hamburger-icon")
hamburgerIconElem.addEventListener("click", ()=>{
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");    
  menu.classList.toggle("open");
  icon.classList.toggle("open");
})

