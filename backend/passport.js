const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "257182843244-mjaj7v8289v71bdmgm8fc6hs2f8btqh8.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_APP_ID = "176830185035096";
const FACEBOOK_APP_SECRET = "582742d610db2096d21521e3fdeaee28";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://www.d1-sports.tech/",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "https://www.d1-sports.tech/",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
