/// <reference path="../typings/index.d.ts" />

"use strict"

// ****************************************************************************
// Imports

const mongoose = require( "mongoose" )




// ****************************************************************************
// App setup

mongoose.connect( "mongodb://localhost/data_demo" )




// ****************************************************************************
// Database setup

// Post -- Title, Content

const postSchema = new mongoose.Schema({
  title  : String,
  content: String
})

const Post = mongoose.model( "Post", postSchema )



// User -- Email, Name

const userSchema = new mongoose.Schema({
  email: String,
  name : String,
  posts: [postSchema]
})

const User = mongoose.model( "User", userSchema )






// const newUser = new User({
//   email: "harry@hogwarts.com",
//   name : "Harry Potter"
// })

// newUser.posts.push({
//   title  : "How to kill Voldemort",
//   content: "You begin with a wand..."
// })


// newUser.save( ( err, user ) => {

//   if ( err ) {

//     console.log( "ERROR: " + err );

//   } else {

//     console.log( user );

//   }
// })


// const newPost = new Post({
//   title  : "Cats are awesome",
//   content: "Because they are furry and puhrs alot!"
// })

// newPost.save( ( err, post ) => {

//   if ( err ) {

//     console.log( "ERROR: " + err );

//   } else {

//     console.log( post );

//   }

// })



User.findOne({name: "Harry Potter"}, ( err, user ) => {

  if ( err ) {

    console.log( "ERROR: " + err );

  } else {

    user.posts.push({
      title  : "Why Voldemort suck!",
      content: "He is bald, and quite smelly when you are up close."
    })

    user.save( ( err, user ) => {

      if ( err ) {

        console.log( "ERROR: " + err );

      } else {

        console.log( user );

      }

    })
  }
})


