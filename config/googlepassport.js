const passport = require('passport');

const GoogleStrategy = require("passport-google-oauth20");

passport.use( 
    new GoogleStrategy({
                // options for the google 
                clientID:"1097915437361-vprbtc7vo5t9437ccs8j6kg6rf36tjlj.apps.googleusercontent.com",
                ClientSecret:"BSe4DHbMmSvhN1me72LfPoFe"

    }), () => {
        //passport callbkack option

    }
)
