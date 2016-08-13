/// <reference path="../../typings/index.d.ts" />

"use strict"

// ****************************************************************************
// Imports

const passportLocalMongoose = require( "passport-local-mongoose" )
const expressSession        = require( "express-session" )
const localStrategy         = require( "passport-local" )
const bodyParser            = require( "body-parser" )
const mongoose              = require( "mongoose" )
const passport              = require( "passport" )
const express               = require( "express" )




// *****************************************************************************
// DB set up

mongoose.connect( "mongodb://localhost/auth_demo" )

const User = require( "./models/user" )




// ****************************************************************************
// App setup

const app = express()


app.set( "view engine", "ejs" )


app.use( bodyParser.urlencoded({extended: true}) )


app.use( expressSession({
  secret           : "This really could be anything at all in the whole world",
  resave           : false,
  saveUninitialized: false
}) )

app.use( passport.initialize() )
app.use( passport.session() )

passport.use( new localStrategy( User.authenticate() ) )
passport.serializeUser( User.serializeUser() )
passport.deserializeUser( User.deserializeUser() )






// *****************************************************************************
// Router

app.get( "/", ( req, res ) => {

  res.render( "home" )

})


app.get( "/secret", isLoggedIn, ( req, res ) => {

  res.render( "secret" )

})


// Authentication routes

// Show sign up form
app.get( "/register", ( req, res ) => {

  res.render( "register" )

})

// Create user
app.post( "/register", ( req, res ) => {

  console.log( "Starting log in" )

  const newName = req.body.username
  const newPassword = req.body.password

  User.register( new User({username: newName}), newPassword, ( err, user ) => {

    if ( err ) {

      console.log( `Error: ${err}` )

      res.redirect( "/register" )


    } else {

      passport.authenticate( "local" )( req, res, () => {
        res.redirect( "/secret" )
      })


    }

  })
})


// Login routes

// Login form
app.get( "/login", ( req, res ) => {

  res.render( "login" )

})

// Login form
app.post( "/login", passport.authenticate( "local", {
  successRedirect: "/",
  failureRedirect: "/login"
}), ( req, res ) => {

  // No stuff here

})


//Log out route
app.get( "/logout", ( req, res ) => {

  req.logout()

  res.redirect( "/" )

  console.log( "You are now logged out" )

})


// *****************************************************************************
// Middleware

function isLoggedIn( req, res, next ){

  if ( req.isAuthenticated() ){

    console.log( "You are good to go!" )

    return next()
  }

  console.log( "You are not logged in" )

  res.redirect( "/login" )

}




// *****************************************************************************
// Server start

app.listen( "3000", () => {

  console.log( "Server has started" )

})



