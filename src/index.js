import './style.css';
import {addParaHome} from './home.js';
import {addParaMenu} from './menu.js';
import {addParaContact} from './contact.js';
import {addParaAbout} from './about.js';

const content = document.querySelector('div#content');

addParaHome();

const homeBtn = document.querySelector('button.home');
homeBtn.addEventListener('click' ,()=>{
    addParaHome()});

const menuBtn = document.querySelector('button.menu');
menuBtn.addEventListener('click', ()=> {
    addParaMenu()})

const contactBtn = document.querySelector('button.contact');
contactBtn.addEventListener('click', ()=> {
    addParaContact()})

const aboutBtn = document.querySelector('button.about');
aboutBtn.addEventListener('click', ()=> {
    addParaAbout()});

        // function addPara(){
//     content.textContent = "Dolor ipsum blah blah blah";

// }
