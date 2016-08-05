/// <reference path="../typings/index.d.ts" />

"use strict"

// ****************************************************************************
// Imports

const mongoose = require( "mongoose" )




// ****************************************************************************
// App setup

mongoose.connect( "mongodb://localhost/data_ref_demo" )





// ****************************************************************************
// Database setup

const Post = require( "./models/post" )
const User = require( "./models/user" )



// User.find({}, ( err, posts ) => {

//   console.log( posts );

// })







// Find user and find all posts for that user

// User.findOne({
//   email: "bob@work.com"
// })
//   .populate( "posts" )
//   .exec( ( err, user ) => {

//     if ( err ) {

//       console.log( "ERROR: " + err );

//     } else {

//       console.log( user );

//     }
//   })


// Make post and append to user

Post.create({
  title  : "Cats really, really are the bestest there is!",
  content: "And then some..."
}, ( err, post ) => {

  User.findOne(
    {
      email: "bob@work.com"
    }, ( err, foundUser ) => {

    if ( err ) {

      console.log( "ERROR: " + err );

    } else {

      foundUser.posts.push( post )

      foundUser.save( ( err, data ) => {

        if ( err ) {

          console.log( "ERROR: " + err );

        } else {

          console.log( data );

        }
      })
    }
  })
})



// User.create({
//   email: "bob@work.com",
//   name : "Bob Barker"
// })




