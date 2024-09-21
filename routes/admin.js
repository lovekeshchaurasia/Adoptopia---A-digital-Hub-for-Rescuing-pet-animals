const express = require("express");
const router = express.Router();
const Admin =    require("../models/admin.js")
const passport = require( "passport")
const session = require('express-session');

// // Use express-session middleware

router.use(session({
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());




router.get("/signupAdmin" , (req , res)=>{
    res.render("../Admin/signup.ejs")
})


//SIGNUP PAGE
router.post("/signupAdmin" , async(req , res)=>{
   try{
      let{username , email , password}  = req.body;
   const newUser = new Admin({email , username});
   const registeredUser = await Admin.register(newUser , password);
   console.log(registeredUser);
   res.redirect("/loginAdmin");
   }catch(err) {
    console.log(err);
      res.redirect("/signupAdmin");
   }
})

//LOGIN PAGE 
router.get("/loginAdmin" , (req , res)=>{
   res.render("../Admin/login.ejs")
})

router.post("/loginAdmin" , passport.authenticate("local" , {
   failureRedirect: '/loginAdmin', 
}) , async(req , res)=>{
   res.redirect("/contactus");
})

// router.get("/logout" , (req , res)=>{
//    req.logout((err)=>{
//       if(err) {
//          next(err);
//       }
//       res.redirect("/");
//    })
// })
module.exports = router;