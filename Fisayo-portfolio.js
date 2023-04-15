// navbar
const bar = document.querySelector('.menubar');
const menu = document.querySelector('.mobilelinks');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const servic = document.querySelector('.servic');
const contac = document.querySelector('.contac');

bar.addEventListener('click', ()=>{
   menu.classList.toggle('appear');
});
home.addEventListener('click', ()=>{
    menu.classList.remove('appear');
 });
 about.addEventListener('click', ()=>{
    menu.classList.remove('appear');
 });
 servic.addEventListener('click', ()=>{
    menu.classList.remove('appear');
 });
 contac.addEventListener('click', ()=>{
    menu.classList.remove('appear');
 });


// my services
const services = [
    {
        name:'Digital Marketing',
        service:'A well-executed plan is crucial in digital marketing, and I specialize in developing comprehensive strategies and executing them flawlessly from beginning to end.',       
        icon: "fa fa-line-chart",

    },
    {
        name:'Social Media Management',
        service:'In order to keep your social media platforms in sync with the current trends, you need someone who is well-versed with the latest updates. I am the person who can fulfill this requirement.',       
        icon:"fa fa-laptop",
    },
    {
        name:'Marketing Strategy',
        service:'Effective planning and strategizing are key elements in marketing, and that is where I excel. Just as I enjoy the satisfaction of a well-executed plan, I take pleasure in developing and executing marketing plans from start to finish.',
        icon:"fa fa-list-alt",
    },
    {
        name:'Content Strategy',
        service:'I have gained considerable experience in crafting compelling content and managing content effectively through the use of content management systems, recognizing the paramount importance of content in todays digital landscape',
        icon:"fa fa-pencil-square",
    }
]

const name = document.querySelector('.name');
const service= document.querySelector('.service');
const icons= document.getElementById('icon');

const nextbtn=document.querySelector('.nextbtn');
const prevbtn= document.querySelector('.prevbtn');

let currentService = 0;

// for initial load
const windowDisplay= ()=>{
    const item = services[currentService];
    name.textContent= item.name;
    service.textContent=item.service;
    icon.classList=item.icon;
}
window.addEventListener('DOMContentLoaded',windowDisplay);

nextbtn.addEventListener('click',()=>{
    currentService++;
    if(currentService>= services.length){
      currentService= 0;
    }
   
    windowDisplay();
  });
  
  prevbtn.addEventListener('click',()=>{
      currentService--;
      if(currentService < 0){
          currentService=services.length-1;
      }
      
      windowDisplay();
  });