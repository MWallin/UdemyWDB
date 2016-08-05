/// <reference path="../../typings/index.d.ts" />

"use strict"



// ****************************************************************************
// Imports

const mongoose = require( "mongoose" )



// ****************************************************************************
// Model definition

// User -- Email, Name

const userSchema = new mongoose.Schema({
  email: String,
  name : String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref : "Post"
    }
  ]
})



// ****************************************************************************
// Exports

module.exports = mongoose.model( "User", userSchema )
