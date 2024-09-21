const express = require("express");
const router = express.Router();
const User =    require("../models/user.js")
const passport = require("passport")
const session = require('express-session');

// // Use express-session middleware

router.use(session({
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());




router.get("/signup" , (req , res)=>{
   res.render("../userss/signup.ejs")
})


//SIGNUP PAGE
router.post("/signup" , async(req , res)=>{
   try{
      let{username , email , password}  = req.body;
   const newUser = new User({email , username});
   const registeredUser = await User.register(newUser , password);
   console.log(registeredUser);
   res.redirect("/login");
   }catch(err) {
      res.redirect("/signup");
   }
})

//LOGIN PAGE 
router.get("/login" , (req , res)=>{
   res.render("../userss/login.ejs")
})

router.post("/login" , passport.authenticate("local" , {
   failureRedirect: '/login', 
}) , async(req , res)=>{
   res.redirect("/");
})

router.get("/logout" , (req , res)=>{
   req.logout((err)=>{
      if(err) {
         next(err);
      }
      res.redirect("/");
   })
})
module.exports = router;