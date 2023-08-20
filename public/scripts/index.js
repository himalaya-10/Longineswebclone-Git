

let scrollcontainer=document.querySelector('.gallery')
let backbtn=document.querySelector('.backbtn')
let nextbtn=document.querySelector('.nextbtn')
let scrollcontainer2=document.querySelector('.scroll2')


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


let up=document.querySelectorAll(".up")
let upd=document.querySelectorAll(".upd")
let upd1=document.querySelectorAll(".upd1")
let upd2=document.querySelectorAll(".upd2")
let upd3=document.querySelectorAll(".upd3")

const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
})
up.forEach((ele)=>{
  observer.observe(ele)
})
const observerd=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting) {
      entry.target.classList.add('showd');
    } else {
      entry.target.classList.remove('showd');
    }
  })
})
upd.forEach((ele)=>{
  observerd.observe(ele)
})
const observerd1=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting) {
      entry.target.classList.add('showd');
    } else {
      entry.target.classList.remove('showd');
    }
  })
})
upd1.forEach((ele)=>{
  observerd1.observe(ele)
})
const observerd2=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting) {
      entry.target.classList.add('showd');
    } else {
      entry.target.classList.remove('showd');
    }
  })
})
upd2.forEach((ele)=>{
  observerd2.observe(ele)
})
const observerd3=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting) {
      entry.target.classList.add('showd');
    } else {
      entry.target.classList.remove('showd');
    }
  })
})
upd3.forEach((ele)=>{
  observerd3.observe(ele)
})
