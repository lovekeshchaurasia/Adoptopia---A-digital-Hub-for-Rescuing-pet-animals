// navigation bar
// var navElement=document.querySelector(".navElements")
// navElement.addEventListener("mouseenter",function(){
//     navElement.style.backgroundColor=  "#ffffff87"
//     navElement.style.color=" #57127F";
//  console.log("dfsh gkjl")

// })

//loader
var tl = gsap.timeline()
var loading = function(){
  tl.to("#purple1", {
  top: "-100%",
  delay: 0.5,
  duration: 0.1,
  ease: "expo.out"
})
tl.to("#loader video", {
  top: "-100%",
  delay:1 ,
  duration: 0.2,
  ease: "expo.out"
},)
tl.to("#purple2", {
  // top: "-100%",
  y : "-100%",
  borderRadius : "100%",
  backgroundColor : "#57127f",
  delay: 0.4,
  scale : 1,
  duration: 0.5,
  ease: "expo.out"
})
tl.to("#loader", {
  opacity: 0,
  duration : 0.1,
  display: "none"
})}
loading()




// main swiper
swiper = function () {
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
}
swiper();
