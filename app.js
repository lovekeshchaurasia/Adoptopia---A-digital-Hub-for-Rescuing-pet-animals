require("dotenv").config()
// console.log(process.env.SECRET);


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const session = require('express-session'); 
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Razorpay = require('razorpay');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require("./models/user.js");
const Contact = require('./models/contact.js');
const rescueuser = require("./models/rescueServer.js")
const { isLoggedIn } = require("./middleware.js");
const multer = require("multer")
const {storage} = require("./cloudConfig.js");
const upload = multer({storage});
const flash = require("connect-flash");

// Connect to MongoDB database
const MONGO_URL = "mongodb://127.0.0.1:27017/Adoptopia";
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// View engine setup
app.use(express.json())
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(session({
  secret: 'your_secret_key_here',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Razorpray Integration
var instance = new Razorpay({
  key_id: 'rzp_test_YxNwtBdLGDL0Pr',
  key_secret: 'IEP0CWXq9MlCjBzBGSJIoSRC',
});
app.post('/create/OrderId', function (req, res, next) {
  var options = {
    amount: 100,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.send(order);
  });
});

// Razorpay Integration

app.post('/api/payment/verify', (req, res) => {
   const razorpayOrderId = req.body.response.razorpay_order_id;
   const razorpayPaymentId = req.body.response.razorpay_payment_id;
   const signature = req.body.response.razorpay_signature;
   const secret = 'IEP0CWXq9MlCjBzBGSJIoSRC';


  var { validatePaymentVerification, validateWebhookSignature } = require('../node_modules/razorpay/dist/utils/razorpay-utils');
  const result = validatePaymentVerification({ "order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);
  res.send(result);
})
// Passport configuration
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.get("/", (req, res) => {
  res.render("home/home");
});

app.get("/donate", isLoggedIn, (req, res) => {
  res.render("listings/donate");
});

app.get("/contactus", isLoggedIn, (req, res) => {
  res.render("home/contact");
});

app.get("/rescue", isLoggedIn, (req, res) => {
  res.render("home/rescue");
});

app.get("/adopt" , (req , res)=>{
  res.render("home/adoopt.js")
})

app.get("/blogs" , isLoggedIn , (req , res)=>{
  res.render("home/blogs")
})

app.get("/successStories" , isLoggedIn , (req , res)=>{
  res.render("home/successStories")
})

app.get("/aboutus" , isLoggedIn , (req , res)=>{
  res.render("home/aboutus.ejs")
})
app.post("/contact", async (req, res) => {
  const { name, email, phoneNumber, message } = req.body;
  const newContact = new Contact({ name, email, phoneNumber, message });
  try {
    await newContact.save();
    res.redirect("/");
  } catch (err) {
    console.error("Error saving contact:", err);
    res.render("listings/error");
  }
});

// app.post("/rescue" ,upload.single('file') , async(req , res)=>{
//   const {name , email , radius , phoneNumber , petType} = req.body;
//   const newRescue = new rescue({name , email , radius , phoneNumber , petType});
//   let url = req.file.path;
//   let filename = req.file.filename;
//   try{
//     newRescue.image= {url , filename}
//     await newRescue.save();
//     res.redirect("/rescue");
//   } catch(err) {
//     console.log(err);
//     res.render("listings/error");
//   }
//   console.log(req.file);
//   console.log(req.body);
// });

// app.post("/rescue", upload.single('file'), async (req, res) => {
//   try {
//     const { name, email, radius, phoneNumber, petType } = req.body;
    
//     // Check if a file was uploaded
//     if (!req.file) {
//       throw new Error("No file uploaded");
//     }

//     const newRescue = new rescue({ name, email, radius, phoneNumber, petType });
//     let url = req.file.path;
//     let filename = req.file.filename;
//     newRescue.image = { url, filename };
//     await newRescue.save();
//     res.redirect("/rescue");
//   } catch (err) {
//     console.error(err);
//     res.render("listings/error");
//   }
// });

app.post("/rescue", upload.single('file'), async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      throw new Error("No file uploaded");
    }
    
    // If a file was uploaded, proceed with saving rescue data
    const { name, email, phoneNumber, radius } = req.body;
    const newRescue = new rescueuser({ name, email, phoneNumber, radius });
    
    // Set image details
    let url = req.file.path;
    let filename = req.file.filename;
    newRescue.image = { url, filename };
    
    // Save the rescue instance
    await newRescue.save();
    
    // Redirect upon successful save
    res.redirect("/");
  } catch (err) {
    console.error("Error saving rescue:", err);
    res.render("listings/error");
  }
});




// const newDocument = new rescue({
//   name: 'John Doe',
//   email: 'john@example.com',
//   phoneNumber: '1234567890'

// });

// newDocument.save()
//   .then(savedDoc => {
//       console.log('Document saved successfully:', savedDoc);
//   })
//   .catch(error => {
//       console.error('Error saving document:', error);
//   });

app.get("/signup", (req, res) => {
  res.render("./userss/signup.ejs"); // Correct path to the view file
});


app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log("Registered user:", registeredUser);
    res.redirect("/login");
  } catch (err) {
    console.error("Error registering user:", err);
    res.redirect("/signup");
  }
});

app.get("/login", (req, res) => {
  res.render("userss/login");
});

app.post("/login", passport.authenticate("local", {
  failureRedirect: '/login',
}), (req, res ) => {
  // console.log(req.flash("success" , "chal gaya"));
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
     if (err) {
        console.error("Error logging out:", err);
        return next(err);
     }
     res.redirect("/");
  });
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.render("listings/error");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
