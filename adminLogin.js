// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const MONGO_URL = "mongodb://127.0.0.1:27017/Adoptopia";
// const path = require("path");
// const session = require('express-session'); 
// const methodOverride = require("method-override");
// const Admin = require("./models/admin.js");
// const ejsMate = require("ejs-mate");
// const passport = require("passport");
// const LocalStrategy = require('passport-local').Strategy;
// const {isLoggedInAdmin} = require("./middleAdmin")
// // view engine setup

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.engine("ejs", ejsMate);
// app.use(passport.initialize());
// app.use(session({
//   secret: 'your_secret_key_here',
//   resave: false,
//   saveUninitialized: false
// }));
// main()
//   .then((res) => {
//     console.log("connected to db");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// async function main() {
//   await mongoose.connect(MONGO_URL);
// }
// const sessionOptions = {
//   secret: 'your_secret_key',
//   resave: false,
//   saveUninitialized: false
// };
// passport.use(new LocalStrategy(Admin.authenticate()));
// passport.serializeUser(Admin.serializeUser());
// passport.deserializeUser(Admin.deserializeUser());
// // app.use("/" , adminRouter);
// app.use((err , req , res , next) => {
//   console.log(err);
//   res.render("./listings/error.ejs");
// })
// app.get("/signupAdmin" , (req , res)=>{
//     res.render("./admin/signup.ejs")
// })
// //SIGNUP PAGE
// app.post("/signupAdmin" , async(req , res)=>{
//    try{
//       let{username , email , password}  = req.body;
//    const newUser = new Admin({email , username});
//    const registeredUser = await Admin.register(newUser , password);
//    console.log(registeredUser);
//    res.redirect("/loginAdmin");
//    }catch(err) {
//     console.log(err);
//       res.redirect("/signupAdmin");
//    }
// })
// //LOGIN PAGE 
// app.get("/loginAdmin" , (req , res)=>{
//    res.render("./admin/login.ejs")
// })
// app.post("/loginAdmin" , passport.authenticate("local" , {
//    failureRedirect: '/loginAdmin', 
// }) , async(req , res)=>{
//   res.render("./AdminFile/adminData");
// })
// app.get("/" ,(req , res)=>{
//   res.render("./AdminFile/front.ejs")
// })
// app.listen(4000, (req, res) => {
//     console.log("server is listening to the port 4000");
//   });







































const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require('express-session'); 
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const { isLoggedInAdmin } = require("./middleAdmin");
const rescue = require("./models/rescueServer.js"); 
// Import models
const Admin = require("./models/admin");
// const NGO = require("./models/");
// const Veterinary = require("./models/rescue");
const rescueAdmin = require("./models/rescueLogin");
const ngo = require("./models/NgoLogin")

// MongoDB URL
const MONGO_URL = "mongodb://127.0.0.1:27017/Adoptopia";

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(session({
  secret: 'your_secret_key_here',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Passport setup
passport.use("admin", new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// passport.use("ngo", new LocalStrategy(NGO.authenticate()));
// passport.serializeUser(NGO.serializeUser());
// passport.deserializeUser(NGO.deserializeUser());

passport.use("rescueLogin", new LocalStrategy(rescueAdmin.authenticate()));
passport.serializeUser(rescueAdmin.serializeUser());
passport.deserializeUser(rescueAdmin.deserializeUser());

passport.use("NgoLogin", new LocalStrategy(ngo.authenticate()));
passport.serializeUser(ngo.serializeUser());
passport.deserializeUser(ngo.deserializeUser());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.render("./listings/error.ejs");
});

// Admin signup page
app.get("/signupAdmin", (req, res) => {
  res.render("./admin/signup.ejs");
});

app.post("/signupAdmin", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new Admin({ email, username });
    const registeredUser = await Admin.register(newUser, password);
    console.log(registeredUser);
    res.redirect("/loginAdmin");
  } catch (err) {
    console.error(err);
    res.redirect("/signupAdmin");
  }
});

// Admin login page
app.get("/loginAdmin", (req, res) => {
  res.render("./admin/login.ejs");
});

app.post("/loginAdmin", passport.authenticate("admin", {
  failureRedirect: '/loginAdmin'
}), (req, res) => {
  res.render("./AdminFile/adminData");
});
app.get("/logoutAdmin", (req, res) => {
  req.logout((err) => {
     if (err) {
        console.error("Error logging out:", err);
        return next(err);
     }
     res.redirect("/");
  });
});
//veterinary signup page
app.get("/signupVeterney", (req, res) => {
  res.render("./vetnery/signup.ejs");
});

// app.post("/signupVeterney", async (req, res) => {
//   try {
//     let { username, email, password } = req.body;
//     const newUser = new rescueS({ email, username });
//     const registeredUser = await rescueS.register(newUser, password);
//     console.log(registeredUser);
//     res.redirect("/loginVeterinary");
//   } catch (err) {
//     console.error(err);
//     res.redirect("/signupVeterney");
//   }
// });
app.post("/signupVeterney", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new rescueAdmin({ email, username });
    const registeredUser = await rescueAdmin.register(newUser, password);
    console.log(registeredUser);
    res.redirect("/loginVeterinary");
  } catch (err) {
    console.error(err);
    res.redirect("/signupVeterney");
  }
});

// Veterinary login page

// app.get("/loginVeterinary", async (req, res) => {
//   let allListings = await rescue.find({});
//   res.render("./vetnery/login.ejs" , allListings);
// });

app.get("/loginVeterinary" , (req , res)=>{
  res.render("./vetnery/login")
})
app.get("/loginVeterinary", async (req, res) => {
  // try {
  //   let allListings = await rescue.find({});
  //   console.log(allListings);
  //   res.render("./vetneryFile/vetneryFile", { allListings}); 
  // } catch (error) {
  //   console.error("Error fetching allListings:", error); 
  //   res.render("./listings/error.ejs");
  // }
});
app.get("/loginVeterinary/:id" , async (req, res) => {
  let { id } = req.params;
  const listing = await rescue.findById(id);
  res.render("./vetneryFile/show.ejs", { listing });
});


app.post("/loginVeterinary", passport.authenticate("rescueLogin", {
  failureRedirect: '/loginVeterinary'
}), async(req, res) => {
  // res.send("<h1>Vetnery ke under aa chuke he </h1>")
  // res.render("./vetneryFile/vetneryFile");
  try {
    let allListings = await rescue.find({});
    console.log(allListings);
    res.render("./vetneryFile/vetneryFile", { allListings}); 
  } catch (error) {
    console.error("Error fetching allListings:", error); 
    res.render("./listings/error.ejs");
  }
});
app.get("/logoutVetnery", (req, res) => {
  req.logout((err) => {
     if (err) {
        console.error("Error logging out:", err);
        return next(err);
     }
     res.redirect("/");
  });
});

// Ngo signup page

app.get("/signupNgo", (req, res) => {
  res.render("./NGO/signup.ejs");
});

app.post("/signupNgo", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new ngo({ email, username });
    const registeredUser = await ngo.register(newUser, password);
    console.log(registeredUser);
    res.redirect("/loginNgo");
  } catch (err) {
    console.error(err);
    res.redirect("/signupNgo");
  }
});

// Ngo login page
app.get("/loginNgo", (req, res) => {
  res.render("./NGO/login.ejs");
});

app.post("/loginNgo", passport.authenticate("NgoLogin", {
  failureRedirect: '/loginNgo'
}), (req, res) => {
  // res.send("<h1>Vetnery ke under aa chuke he </h1>")
  res.render("./NgoFile/NgoFile");
});
app.get("/logoutNgo", (req, res) => {
  req.logout((err) => {
     if (err) {
        console.error("Error logging out:", err);
        return next(err);
     }
     res.redirect("/");
  });
});

//Front Page
app.get("/", (req, res) => {
  res.render("./AdminFile/front.ejs");
});

//----------------------------------------------------Admin Section fetching data-------------------------->


  
app.get("/vetData" , async(req, res) => {
  try {
    let allListings = await rescue.find({});
    console.log(allListings);
    res.render("./AdminFile/showResueData", { allListings}); 
  } catch (error) {
    console.error("Error fetching allListings:", error); 
    res.render("./listings/error.ejs");
  }
});

app.get("/vetData/:id" , async (req, res) => {
  let { id } = req.params;
  const listing = await rescue.findById(id);
  res.render("./AdminFile/shoeDeepResueData.ejs", { listing });
});


























// Start server
app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
