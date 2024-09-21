// GSAP animation for the sign-in/sign-up forms
gsap.from(".sign-in-form", {
    opacity: 0,
    y: 50,
    duration: 1
  });
  
  gsap.from(".sign-up-form", {
    opacity: 0,
    y: 50,
    duration: 1
  });
  
  // GSAP animation for the left panel
  gsap.from(".left-panel", {
    opacity: 0,
    x: -50,
    duration: 1
  });
  
  // GSAP animation for the right panel
  gsap.from(".right-panel", {
    opacity: 0,
    x: 50,
    duration: 1
  });
  