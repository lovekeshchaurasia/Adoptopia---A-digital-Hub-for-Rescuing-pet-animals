//cursor follower
var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
   gsap.to("#cursor",{
     x: dets.x,
     y: dets.y
   })
})


var data1 = [
    {
        image: "https://cdn.octopix.in/uploads/portfolio/2023/11/04/angel-wings-99QcDHz0PgEdYEl2m8EQVXzWWnQZtxp1gKVpJcpj9eDTduG1TCkr3Lo45niMFClqj2XZS5GX8hp8scV9-400x400.jpg",
        username: "Lalita Mandal",
        para: "Fantastic experience adopting from this site! Our new furry friend is a perfect fit. The process was smooth, and the staff were incredibly helpful."
    },
    {
        image: "https://cdn.octopix.in/uploads/portfolio/2023/11/04/angel-wings-mEScTnTruKIySZwCKZSy0OUUNedA93Lq4lhnrrqlrFlgbVVO2xPOYgAYw1z62I9lYKSiyp0hUObS0XpJ-400x400.jpg",
        username: "Ganesh Vasav",
        para: "Highly recommend! Adopted a playful pup here, and we couldn't be happier. The site's user-friendly interface made finding our new family member a breeze"
    },
    {
        image: "https://cdn.octopix.in/uploads/portfolio/2023/11/04/angel-wings-WuXD5czVpoo9VRvHE6vvdQLDolmb1rGBkqWw4KuWwgGZu6y5RE4P441eMjarRDHoLDsLfKxeqSuhN7MD-400x400.jpg",
        username: "A Patel",
        para: "Well done to the guys at Animal adoption agency & keep up the great customer service."
    },
    {
        image: "https://cdn.octopix.in/uploads/portfolio/2023/11/04/angel-wings-9EW9O4MZdtJLU3Psh6Kzk14dZ8pmdHh9DViTemfkZ9LdXq3nF79pgnlG5KIGbidt8hbJS9Jdhb0aY5PL-400x400.jpg",
        username: "Umesh Singh",
        para: "We adopted our family pet there at Llandilo enjoy playing with him while I can trust him 100%."
    },
    {
        image: "https://cdn.octopix.in/uploads/portfolio/2019/06/21/angel-wings-9vzQgJQgLDxDKTswPn5OtDA7SABBORFU9mLM1yuDKjbeFFJGwCw3PsodFJNVeIfTIgpM1KpdPXjz1MCT-400x400.jpg",
        username: "Shanti Chaudhari",
        para: "Such a heartwarming experience adopting from this site. Our cat is settling in well, thanks to the thorough care and support provided."
    },
    {
        image: "https://cdn.octopix.in/uploads/portfolio/2023/11/04/angel-wings-CvOixTWPZMHHVCWkWzA4Swtt6p1Yex8HMhcARtuMPu7Be0p16iwUHBo9aOu5duNF7hgrroI7urL8TvwA-400x400.jpg",
        username: "Saroj Chandra",
        para: "Excellent service! Adopted a sweet bunny who has brought so much joy into our home. Grateful for this site and their dedication to pet welfare."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xGdrnqOVZookgeF-kijxwRmMhUKgwNENIg&usqp=CAU",
        username: "Manoj Prasad",
        para: "Incredible resource for pet adoption! Adopted a loving kitten here, and the staff ensured a seamless transition. Couldn't be happier with our furry addition!"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSga1pY-1jULHaJuoEO03xouKT26hyMVSIqWQ&usqp=CAU",
        username: "Ashish Sharma",
        para: "Amazing selection of pets available for adoption. Adopted a senior dog who has filled our home with love. Thank you to this site for making it possible."
    },


]

var review1 = document.querySelector("#review1")
var clutter1 = ""

data1.forEach(function (elem) {
    var x = Math.floor(Math.random() * 100)
    var y = Math.floor(Math.random() * 10)
    clutter1 += `<div class="card">
    <img src="${elem.image}"
        alt="">
    <h2>${elem.username}</h2>
    <p>${elem.para}</p>
    <div class="stars">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-line"></i>
            <i class="ri-star-line"></i>
            </div>
            <div class="likes">
            <h4><i class="ri-thumb-up-fill"></i> ${x}</h4>
            <h4><i class="ri-thumb-down-fill"></i> ${y} </h4>
            <h4><i class="ri-flag-2-fill"></i> Report</h4>
            <h4><i class="ri-chat-1-fill"></i> Comment</h4></div>
</div>`
})
review1.innerHTML = clutter1



var data2 = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIbZm_z4PAwUW_J6dqfZ_wVaoanjrKU9Fxw&usqp=CAU",
        username: "Santosh Madar",
        para: "Top-notch experience! Adopted a loving puppy who has filled our home with laughter. The site's user-friendly interface made the process a breeze."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxxX-xeH8V-mUtpxmAb1TXejZlCSqASAilQ&usqp=CAU",
        username: "Priya Patel",
        para: "An outstanding platform for pet adoption! Adopted a playful ferret who has brought endless joy into our lives. "
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTYnH1WdG-dj1wUZv3C6hdUbidW6M_Tl06w&usqp=CAU",
        username: "Anika Sharma",
        para: "Exceptional service and support for pets and adopters alike. Adopted an adorable hamster who has become the heart of our home. "
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ev6rG5BGKBSQpwZ1RGbv9Khc1dXvF9CHtA&usqp=CAU",
        username: "Neha Reddy",
        para: "Thrilled with our adoption journey! Found our perfect match in a cuddly kitten. "
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyEknXMY8b3ai5FjEwmQkMMPxdBkfHYJlDA&usqp=CAU",
        username: "Riya Choudhury",
        para: "A wide array of pets available for adoption. Found our loyal companion, a smart dog, here."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWlMFMOnKN6-1LDsbO15kG8B8YZZXwvXAzA&usqp=CAU",
        username: "Pooja Kapoor",
        para: "Highly efficient and compassionate staff. Adopted a gentle guinea pig who has quickly become part of the family. Thank you"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oaYAvaz2CPC_QGwZH6shNaBZaE4MCMbuPA&usqp=CAU",
        username: "Vikram Joshi",
        para: "Smooth sailing with our adoption process. Found our perfect match in a snuggly friend. Grateful for this site's dedication "
    },

]

var review2 = document.querySelector("#review2")
var clutter2 = ""

data2.forEach(function (elem) {
    var x = Math.floor(Math.random() * 100)
    var y = Math.floor(Math.random() * 10)
    clutter2 += `<div class="card">
   <img src="${elem.image}"
       alt="">
   <h2>${elem.username}</h2>
   <p>${elem.para}</p>
   <div class="stars">
           <i class="ri-star-fill"></i>
           <i class="ri-star-fill"></i>
           <i class="ri-star-fill"></i>
           <i class="ri-star-half-line"></i>
           <i class="ri-star-line"></i>
           </div>
           <div class="likes">
           <h4><i class="ri-thumb-up-fill"></i> ${x}</h4>
           <h4><i class="ri-thumb-down-fill"></i> ${y} </h4>
           <h4><i class="ri-flag-2-fill"></i> Report</h4>
           <h4><i class="ri-chat-1-fill"></i> Comment</h4></div>
</div>`
})
review2.innerHTML = clutter2



var data3= [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsm8MKyf2UJpLmN4pN14lZ23nTHkv8jW7FBw&usqp=CAU",
        username: "Rajiv Malhotra",
        para: "Superb service and care for both pets and adopters. Adopted a feisty feline who has brought so much energy into our home. "
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kqJT_oYcM6UiDHavierFpjrRwXAEuVcRsw&usqp=CAU",
        username: "Rahul Patel",
        para: "Impressed by the seamless adoption process. Found our gentle giant of a dog here, and couldn't be happier. "
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEI0jh4Aarc-PB1aM9d9B7MoXPBQ__2YighHWDxQeZxhjP9lZHCMJK-UlzR7AoP7MA4s&usqp=CAU",
        username: "Sanjana Singhania ",
        para: "Adopted a loving puppy who has filled our home with happiness. The site's interface made finding our new family member a breeze."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu63YWIMAsR4iHf2-083B_JU2JKoEzP_DjpjqKjIhf2FnAEuFWDc0fmy0kD_a3CQTw4Jc&usqp=CAU",
        username: "Karan Kapoor",
        para: "Adopted a playful ferret who has brought endless laughter into our lives. Grateful for this site's dedication."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXECac1GJyy1mDFJ8Q--izZ6rcMBNdt10Ug&usqp=CAU",
        username: "Arin jayraj",
        para: "Adopted a charming hamster who has stolen our hearts. Thank you for this wonderful opportunity!"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lZu2Cql7NBk_2TjRPgncGV4mI1GwHb-B3Q&usqp=CAU",
        username: "Natasha Chatterjee",
        para: "Thrilled with our adoption experience! Found our perfect match in an affectionate cat. "
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjK6quxZxGYkJmjhLVOLjO7PJ2uQVzZiyiEQ&usqp=CAU",
        username: "Deepak Patel",
        para: "Incredible variety of pets available for adoption. Found our new best friend, a loyal companion dog, here."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDgyD8VytYE0LRVtfEpKxvp9Dsit9k0Zrzw&usqp=CAU",
        username: "Siddharth Shah",
        para: "Highly efficient and caring staff. Adopted a sweet rabbit who has quickly become part of the family"
    },

]

var review3 = document.querySelector("#review3")
var clutter3 = ""

data3.forEach(function (elem) {
    var x = Math.floor(Math.random() * 100)
    var y = Math.floor(Math.random() * 10)
    clutter3 += `<div class="card">
   <img src="${elem.image}"
       alt="">
   <h2>${elem.username}</h2>
   <p>${elem.para}</p>
   <div class="stars">
           <i class="ri-star-fill"></i>
           <i class="ri-star-fill"></i>
           <i class="ri-star-fill"></i>
           <i class="ri-star-half-line"></i>
           <i class="ri-star-line"></i>
           </div>
           <div class="likes">
           <h4><i class="ri-thumb-up-fill"></i> ${x}</h4>
           <h4><i class="ri-thumb-down-fill"></i> ${y} </h4>
           <h4><i class="ri-flag-2-fill"></i> Report</h4>
           <h4><i class="ri-chat-1-fill"></i> Comment</h4></div>
</div>`
})
review3.innerHTML = clutter3



const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file"); // Corrected id name
const imageView = document.getElementById("img-view"); // Corrected id name

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = "";
  imageView.style.border = "none";
}

dropArea.addEventListener("dragover", function(e) {
  e.preventDefault();
});

dropArea.addEventListener("drop", function(e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});






//animations 

var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page1",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        pin: true,
        scrub: 1

    }
})

tl1.from(".form-container", {
    x: -500,
    rotate: -45,
    duration: 1,
    delay: 1,
    opacity: 0
}, "animation")


tl1.from(".drop-box-container", {
    x: 500,
    rotate: 45,
    duration: 1,
    delay: 1,
    opacity: 0
}, "animation")


//HEADING animation
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -30%",
        pin: true,
        scrub: 1

    }
})

var blog = document.querySelector("#page2 h1")
var blogs = blog.textContent
var heading = blogs.split("")
var doc =""
heading.forEach(function(elem){
  doc +=`<span>${elem}</span>`
})
blog.innerHTML=doc
console.log(doc)
tl2.from("#page2 h1 span", {
  y: 400,
  duration:1,
  delay: 0.2,
  stagger:0.4
})

// REVIEW 1 ANIMATION

gsap.from("#review1 .card",{
    x: "-500%",
    duration: 10 ,
    repeat:-1,
    yoyo:true,
    ease: "linear"

},"ani")

//REVIEW 2 ANIMAITON

gsap.to("#review2 .card",{
    x: "-200%",
    duration: 10 ,
    repeat:-1,
    yoyo:true,
    ease: "linear"

},"ani")

//REVIEQ 3 ANIMATION

gsap.from("#review3 .card",{
    x: "-500%",
    duration: 10 ,
    repeat:-1,
    yoyo:true,
    ease: "linear"

},"ani")




