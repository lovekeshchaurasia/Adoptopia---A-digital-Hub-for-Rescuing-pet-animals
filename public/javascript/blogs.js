//cursor follower
var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
   gsap.to("#cursor",{
     x: dets.x,
     y: dets.y
   })
})

// DATA 1 FOR BLOGS 
var data1=[
    {
        image: "https://imgs.search.brave.com/WsmcayagXpusoJ1-eoPdAAxLHu6mOfT47HE9TH68Z4U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cGlnZ3lyaWRlLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA2L0Zy/ZW5jaC0xMDI0LSVD/MyU5Ny01MzYtcHgt/MTAyNC0lQzMlOTct/NTM2LXB4LW1pbi0x/MDI0eDUzNi5wbmc",
        heading :"Popular Dog Breeds In India",
        para:"More than 340 breeds of dogs are known to exist in the world today. In India, most of the pets dogs and watchdogs are of foreign breed.",
        link: "https://dogbreedo.com/",
        likes: 45,
        dislikes :13,
        report:false
    },
    {
        image: "https://image.petmd.com/files/styles/978x550/public/2023-09/travel-with-pup_0.jpeg?w=1080&q=75",
        heading :"How to Travel With Your Dog",
        para:" Here's what you need to know to keep your fur baby safe and comfortable on the road.",
        link: "https://dogbreedo.com/",
        likes: 54,
        dislikes :21,
        report:false
    },
    {
        image: "https://imgs.search.brave.com/0iZ3bt1QcekyRhsXeLDePfPkIR6ricmcTinBW5TvBvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDE4NDA2MC9waG90/by9jdXRlLWhhcHB5/LWRvZy1wbGF5aW5n/LXdpdGgtYS1zdGlj/ay5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9U0VRVEFoLXVl/bWUwVDlKQ1NGSzYw/OHFUNnhPQ0FuMGpC/ZmNhQ1ZISGJhYz0",
        heading:" Dog Heartworm Symptoms",
        para:"Heartworm disease is caused by a mosquito transmitted parasite. If left untreated, it can be a debilitating disease and sometimes prove fatal",
        link: "https://www.pethealthnetwork.com/dog-health/dog-diseases-conditions-a-z/why-you-won%E2%80%99t-see-your-dogs-heartworm-symptoms-until-it%E2%80%99s#overlay-context=tags/parasites",
        likes: 32,
        dislikes :13,
        report:false
    },
      {
        image: "https://imgs.search.brave.com/nFsJ1a87mgwaKOY4dN-M59G2Lb4Q9dXD-mTv3AkAIm4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzk0LzczLzg1/LzM2MF9GXzU5NDcz/ODUyOV80eEJNbHF5/YkQxR1NTWFcxTzM4/aHozUnJzbG9maVlE/by5qcGc",
        heading: "Caring for Your Black Cat",
        para: "Black cats are often associated with superstition and folklore, but they make wonderful pets just like any other cat. Learn how to care for your black feline friend here.",
        link: "https://www.aspca.org/pet-care/cat-care/general-cat-care",
        likes: 62,
        dislikes: 20,
        report: false
      },
      {
        image: "https://imgs.search.brave.com/i-Ywy9a6v8HXlRpiTPL6fymJbLLp-Gu9jCIc6rmk8ec/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/LzEzMDgxOTE0MjAy/Ny1jdXRlc3QtYW5p/bWFsLTMtZ2lhbnQt/cGFuZGEuanBnP3E9/d18xMTEwLGNfZmls/bA",
        heading: "Giant Panda Conservation",
        para: "Giant pandas are an iconic symbol of conservation efforts worldwide. Learn more about these magnificent creatures and what you can do to help protect them.",
        link: "https://www.worldwildlife.org/species/giant-panda",
        likes: 78,
        dislikes: 15,
        report: false
      },
      {
        image: "https://imgs.search.brave.com/0iZ3bt1QcekyRhsXeLDePfPkIR6ricmcTinBW5TvBvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDE4NDA2MC9waG90/by9jdXRlLWhhcHB5/LWRvZy1wbGF5aW5n/LXdpdGgtYS1zdGlj/ay5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9U0VRVEFoLXVl/bWUwVDlKQ1NGSzYw/OHFUNnhPQ0FuMGpC/ZmNhQ1ZISGJhYz0",
        heading: "Adopting a Puppy Things to Consider",
        para: "Thinking about adopting a puppy? Make sure you're prepared for the responsibilities that come with it. Here are some things to consider before bringing home a new furry friend.",
        link: "https://www.petfinder.com/pet-adoption/dog-adoption/thinking-about-adopting-puppy/",
        likes: 95,
        dislikes: 12,
        report: false
      },
      {
        image: "https://imgs.search.brave.com/Ul95iBUf85ZbOua4npOTOGlEphFIOqGyBFdIxjcf-_s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWdz/Lm1vbmdhYmF5LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvc2l0/ZXMvMjAvMjAyMy8w/OS8yNzA0MzQxNi9B/c3NhbS1lbGVwaGFu/dHMtMy03Njh4NTEy/LmpwZw",
        heading: "African Elephant Conservation",
        para: "African elephants are majestic creatures facing serious threats from habitat loss and poaching. Learn more about conservation efforts to protect these gentle giants.",
        link: "https://www.worldwildlife.org/species/african-elephant",
        likes: 82,
        dislikes: 25,
        report: false
      },
      {
        image: "https://imgs.search.brave.com/5VAnbi350o_tCyG2_P1lD1WQYGifeUyaTQKh5FqGQyU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kb2d0/aW1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvMTIv/MjAxNy8wNS9wb3B1/bGFyLW1ldGhvZHMt/ZG9nLXRyYWluaW5n/LTUuanBn",
        heading: "Basic Dog Training Techniques",
        para: "Training your dog is essential for a harmonious relationship between you and your pet. Learn some basic dog training techniques to help your furry friend become well-behaved and obedient.",
        link: "https://www.akc.org/expert-advice/training/",
        likes: 75,
        dislikes: 30,
        report: false
      },
      {
        image: "https://imgs.search.brave.com/VQfDCBoee141vrex5P4olZE9cBcutsVp7dIJ44JFvSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bW1jLmdvdi93cC1j/b250ZW50L3VwbG9h/ZHMvODIyOTU5OTA5/OV84ODU4YjI5M2Ez/X28uanBn",
        heading: "Polar Bear Conservation",
        para: "Polar bears are facing unprecedented challenges due to climate change and habitat loss. Learn more about efforts to conserve these iconic Arctic predators.",
        link: "https://www.worldwildlife.org/species/polar-bear",
        likes: 88,
        dislikes: 10,
        report: false
      },
      {
        image: "https://imgs.search.brave.com/mefMA3OEK1haFlBdecxzP629W-5GrtK4xign8E3uYPE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzEyLzgwLzMz/LzM2MF9GXzIxMjgw/MzMwNF9uR0NJSG1i/Z1llUnRIY2l4NllJ/Z3BjUUpPc29qN3dN/bC5qcGc",
        heading: "Choosing the Right Dog Breed for You",
        para: "With so many different dog breeds out there, it can be overwhelming to choose the right one for you. Learn how to find a dog breed that matches your lifestyle and personality.",
        link: "https://www.akc.org/dog-breed-selector/",
        likes: 80,
        dislikes: 20,
        report: false
      },
      {
        image: "https://imgs.search.brave.com/u84kviYJz7_QgEbGsiF90c0WoBABYPmkgWIbcqyQ0uw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE4/MjgyNzExL3Bob3Rv/L3RpZ2VyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1LVVdi/VldjTGNRN1NJOTZM/VTZkNDFUeVgtVV8x/NVpzLV8yMWJZckdh/Y3ZrPQ",
        heading: "Tiger Conservation",
        para: "Tigers are one of the most iconic and endangered species on the planet. Learn more about the threats facing these magnificent big cats and how you can help save them from extinction.",
        link: "https://www.worldwildlife.org/species/tiger",
        likes: 90,
        dislikes: 18,
        report: false
      },
      {
        image: "https://imgs.search.brave.com/FyKhes_Gtxkr4oGJe2MFKCTKLxAgTw_5BAOL3Xm-76A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MzMwMzMzL3Bob3Rv/L2RhY2hzaHVuZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/V0FrMTE5RjhMWWNP/NXl6N0x3N3pHSE1U/aTJaQUlrQjI5anp4/TVJkRlpuQT0",
        heading: "Senior Dog Care Tips",
        para: "As dogs age, they require special care and attention to keep them healthy and happy. Learn some tips for caring for your senior canine companion and ensuring their golden years are comfortable.",
        link: "https://www.petfinder.com/dog-care/senior-dog-care/",
        likes: 70,
        dislikes: 15,
        report: false
      }
]

//DISPLAY OF REVIEW 1 

var review1 = document.querySelector("#review1")
var clutter1 = ""

data1.forEach(function(elem){
    clutter1 = clutter1 + `
    <div class="card">
        <img src=${elem.image} alt="">
        <h2>${elem.heading}
           </h2>
        <p>${elem.para}</p>
        <div class="stars">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-line"></i>
            <i class="ri-star-line"></i>
        </div>
        <div class="likes">
            <h4><i class="ri-thumb-up-fill"></i> ${elem.likes} likes  </h4>
            <h4><i class="ri-thumb-down-fill"></i> ${elem.dislikes} dislike </h4>
            <h4><i class="ri-flag-2-fill"></i> Report</h4>
        </div>
        <div id="overlay">
        <h2><a href=${elem.link}>View More</a></h2>
        </div>

    </div>`
})
review1.innerHTML = clutter1





//data 2

var data2=[{
    image: "https://plus.unsplash.com/premium_photo-1661503280224-a86d7ad2a574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D",
    heading: "Guide to Pet-Friendly Cafes",
    para: "Explore the best pet-friendly cafes in your area where you can enjoy a cup of coffee or a meal with your furry companion. Discover welcoming environments that cater to both pets and their owners.",
    link: "https://example.com/pet-friendly-cafes",
    likes: 80,
    dislikes: 15,
    report: false
  },
  {
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D",
    heading: "Pet Injections and Nutritious Food",
    para: "Learn about the importance of pet vaccinations and providing balanced nutrition for your furry friend's overall health and well-being. Discover the essentials of keeping your pet healthy and happy.",
    link: "https://example.com/pet-injections-food",
    likes: 85,
    dislikes: 10,
    report: false
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1663036434780-998c35df5513?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D",
    heading: "Essential Pet Safety Tips",
    para: "Ensure the safety of your beloved pet with these essential safety tips covering various aspects of pet care. From household hazards to outdoor adventures, keep your furry friend out of harm's way.",
    link: "https://example.com/pet-safety-tips",
    likes: 90,
    dislikes: 8,
    report: false
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Comprehensive Pet Adoption Guide",
    para: "Thinking of adopting a pet? This comprehensive guide covers everything you need to know about pet adoption, from finding the right pet to preparing your home and family for their arrival.",
    link: "https://example.com/pet-adoption-guide",
    likes: 75,
    dislikes: 20,
    report: false
  },
  {
    image: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBldHN8ZW58MHx8MHx8fDA%3D",
    heading: "Fun and Effective Pet Exercise Tips",
    para: "Keep your pet happy, healthy, and active with these fun and effective exercise tips. From indoor games to outdoor adventures, discover enjoyable ways to keep your furry friend in top shape.",
    link: "https://example.com/pet-exercise-tips",
    likes: 82,
    dislikes: 18,
    report: false
  },
  {
    image: "https://images.unsplash.com/photo-1529472119196-cb724127a98e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBldHN8ZW58MHx8MHx8fDA%3D",
    heading: "Expert Pet Grooming Tips",
    para: "Learn how to groom your pet like a professional with these expert tips and techniques. From brushing and bathing to nail trimming and ear cleaning, keep your furry friend looking and feeling their best.",
    link: "https://example.com/pet-grooming-tips",
    likes: 88,
    dislikes: 12,
    report: false
  },
  {
    image: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBldHN8ZW58MHx8MHx8fDA%3D",
    heading: "Essential Pet Travel Tips",
    para: "Planning a trip with your pet? Ensure a stress-free journey with these essential pet travel tips. From packing essentials to navigating pet-friendly accommodations, make traveling with your pet a breeze.",
    link: "https://example.com/pet-travel-tips",
    likes: 80,
    dislikes: 14,
    report: false
  },
  {
    image: "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBldHN8ZW58MHx8MHx8fDA%3D",
    heading: "Understanding Pet Insurance",
    para: "Protect your pet's health and your finances with this comprehensive guide to pet insurance. Learn about different coverage options and how to choose the right policy for your furry friend's needs.",
    link: "https://example.com/pet-insurance-guide",
    likes: 92,
    dislikes: 10,
    report: false
  },
  {
    image: "https://example.com/pet-emergency-preparedness.jpg",
    heading: "Pet Emergency Preparedness",
    para: "Be prepared for any emergency or natural disaster with these essential tips for pet emergency preparedness. Create a pet emergency kit, develop an evacuation plan, and ensure your pet's safety in times of crisis.",
    link: "https://example.com/pet-emergency-preparedness",
    likes: 85,
    dislikes: 15,
    report: false
  },
  {
    image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBldHN8ZW58MHx8MHx8fDA%3D",
    heading: "Importance of Regular Pet Health Checkups",
    para: "Regular health checkups are crucial for maintaining your pet's well-being. Learn why annual vet visits, vaccinations, and preventive care are essential for keeping your furry friend healthy and happy.",
    link: "https://example.com/pet-health-checkup",
    likes: 70,
    dislikes: 10,
    report: false
  },
  {
    image: "https://example.com/pet-behavior-training.jpg",
    heading: "Effective Pet Behavior Training Techniques",
    para: "Address common behavior issues and build a strong bond with your pet through effective training techniques. Discover positive reinforcement methods and tips for shaping desirable behaviors.",
    link: "https://example.com/pet-behavior-training",
    likes: 85,
    dislikes: 5,
    report: false
  },
  {
    image: "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBldHN8ZW58MHx8MHx8fDA%3D",
    heading: "Planning a Pet-Friendly Vacation",
    para: "Make your vacation memorable for both you and your pet by choosing pet-friendly destinations and accommodations. Explore tips for traveling with your furry companion and creating unforgettable experiences together.",
    link: "https://example.com/pet-friendly-vacation",
    likes: 90,
    dislikes: 10,
    report: false
  }]

//DISPLAY FUNCTION OF DATA 2
var review2 = document.querySelector("#review2")
var clutter2 = ""

data2.forEach(function(elem){
    clutter2 = clutter2 + `
    <div class="card">
        <img src=${elem.image} alt="">
        <h2>${elem.heading}
           </h2>
        <p>${elem.para}</p>
        <div class="stars" style="padding-top :30px">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-line"></i>
            <i class="ri-star-line"></i>
        </div>
        <div class="likes">
            <h4><i class="ri-thumb-up-fill"></i> ${elem.likes} </h4>
            <h4><i class="ri-thumb-down-fill"></i> ${elem.dislikes} </h4>
            <h4><i class="ri-flag-2-fill"></i> Report</h4>
        </div>
        <div id="overlay">
        <h2><a href=${elem.link}>View More</a></h2>
        </div>

    </div>`
})
review2.innerHTML = clutter2


//ANIMATION BEGINS

var tl = gsap.timeline()

//blogs HEADING animation
var blog = document.querySelector("#page1 h1")
var blogs = blog.textContent
var heading = blogs.split("")
var clutter =""
heading.forEach(function(elem){
  clutter +=`<span>${elem}</span>`
})
blog.innerHTML=clutter

tl.from("#page1 h1 span", {
  y: 200,
  duration:1,
  delay: 0.2,
  stagger:0.4
})

// BLOGS PARA ANIMATION

var para = document.querySelector("#page1 h4")
var parasplit = (para.textContent).split("")
var doc=""
parasplit.forEach(function(e){
  doc +=`<span>${e}</span>`
})
para.innerHTML= doc
  tl.to("#page1 h4 span" , {
    delay: 0.7,
    color: "purple",
    stagger:0.01
  })


// REVIEW 1 ANIMATION

tl.from("#review1 .card",{
     x: "-500%",
     duration: 10 ,
     repeat:-1,
     yoyo:true,
     ease: "linear"

 },"animated")

//REVIEW 2 ANIMAITON

 tl.to("#review2 .card",{
     x: "-500%",
     duration: 10 ,
     repeat:-1,
     yoyo:true,
     ease: "linear"

 },"animated")