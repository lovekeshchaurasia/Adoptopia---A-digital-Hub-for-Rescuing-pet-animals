var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
   gsap.to("#cursor",{
     x: dets.x,
     y: dets.y
   })
})


//animations 

var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page1",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        pin: true,
    }
})

tl1.from("#page1 #part1", {
    x: -500,
  
    duration:0.5,
    delay:0.5,
    opacity: 0
}, "animation")


tl1.from("#page1 #part2", {
    y: 500,
  
    duration:0.5,
    delay:0.5,
    opacity: 0
}, "animation")


var blog = document.querySelector("#page1 h1")
var blogs = blog.textContent
var heading = blogs.split("")
var doc =""
heading.forEach(function(elem){
  doc +=`<span>${elem}</span>`
})
blog.innerHTML=doc

tl1.from("#page1 h1 span ", {
  y: 400,
  duration:0.2,
  delay: 0.2,
  stagger:0.2,
  color:"white"

})

var blog2 = document.querySelector("#page1 h2")
var blogs2 = blog2.textContent
var heading = blogs2.split("")
var doc2 =""
heading.forEach(function(elem){
  doc2 +=`<span>${elem}</span>`
})
blog2.innerHTML=doc2

tl1.from("#page1 h2 span ", {
  y: 400,
  duration:0.2,
  delay: 0.2,
  stagger:0.2,
  color:"white"
})

var blog3 = document.querySelector("#page1 p")
var bloggs3 = blog3.textContent
var heading = bloggs3.split("")
var doc3 =""
heading.forEach(function(elem){
  doc3 +=`<span>${elem}</span>`
})
blog3.innerHTML=doc3

tl1.from("#page1 p span ", {
  y: 400,
  duration:0.2,
  delay: 0.2,
  stagger:0.02,
  color:"white",

})


//page2

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        pin: true,
        

    }
})

tl2.from("#page2 #part1", {
    x: -500,
  
    duration:0.5,
    delay:0.5,
    opacity: 0
}, "animation")


tl2.from("#page2 #part2", {
    y: 500,
  
    duration:0.5,
    delay:0.5,
    opacity: 0
}, "animation")


var blog = document.querySelector("#page2 #part1 h1")
var blogs = blog.textContent
var heading = blogs.split("")
var doc =""
heading.forEach(function(elem){
  doc +=`<span>${elem}</span>`
})
blog.innerHTML=doc

tl2.from("#page2 #part1 h1 span ", {
  y: 400,
  duration:0.5,
  delay: 0.5,
  stagger:0.4,
  color:"white",
  
})



var our = document.querySelector("#page2 #part1 p")
var ours = our.textContent
var heading = ours.split("")
var eleleo =""
heading.forEach(function(elem){
  eleleo +=`<span>${elem}</span>`
})
our.innerHTML=eleleo

tl2.from("#page2 #part1 p span ", {
  y: 100,
  duration:7.4,
  delay: 0.5,
  stagger:1,
 color:"white"

     
})



var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        pin: true,
    }
})

tl3.from("#arpit ", {
    x: -500,
    duration:0.5,
    delay:0.5,
    opacity: 0
}, )

tl3.from("#kay ", {
    x: -500,
    duration:0.5,
    delay:0.5,
    opacity: 0
}, )
tl3.from("#lov ", {
    x: -500,
    duration:0.5,
    delay:0.5,
    opacity: 0
}, )