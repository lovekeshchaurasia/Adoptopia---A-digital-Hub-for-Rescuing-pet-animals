module.exports.isLoggedInAdmin = (req , res , next) => {
    if(!req.isAuthenticated()) {
      req.session.redirectUrl = req.originalUrl;
        return res.redirect("/loginAdmin")
      }
      next();
    }

    module.exports.saveRedirectUrl = (req , res , next) => {
      if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
      }
      next();
    };
