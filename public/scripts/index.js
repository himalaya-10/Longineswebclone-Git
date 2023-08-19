

let scrollcontainer=document.querySelector('.gallery')
let backbtn=document.querySelector('.backbtn')
let nextbtn=document.querySelector('.nextbtn')
let scrollcontainer2=document.querySelector('.scroll2')

console.log(scrollcontainer2)

nextbtn.addEventListener('click',(e)=>{
    
    scrollcontainer.scrollBy({
        left: 783.5,
        behavior: 'smooth'
      });

      scrollcontainer2.classList.add("moveleft");
})
backbtn.addEventListener('click',(e)=>{
    scrollcontainer.scrollBy({
        left: -783.5,
        behavior: 'smooth'
      });

      scrollcontainer2.classList.remove("moveleft");
})