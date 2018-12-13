const passport = require('passport');
//googlestrat to instruct passport
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js')

//fetch collection made 
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id); //user.id is mongo assigned not the googleid
});

//async action returns promise.
//turn id into mongo instance, return user
passport.deserializeUser((id, done) => {
    //do search over collection of users
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

//passport.use - shows that there is a new strategy to be aware of
passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSectret,
            callbackURL: '/auth/google/callback', //user coming back from google
            proxy: true
        },
        async(accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id })

            if (existingUser) {
                //we already have record
                return done(null, existingUser) //null is error object, so no error, and then user record. tells passport were done hers the suer record
            }   //make new record if no record
                const user = await new User({ googleId: profile.id }).save() //creates instance of user and save to DB 
                done(null, user);
            }
            // console.log('access token', accessToken); //allow to read emails, info
            // console.log('refresh token', refreshToken); //allows to update get access token after it expires.
            // console.log('profile', profile);
    )
);