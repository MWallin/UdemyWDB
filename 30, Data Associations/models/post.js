/// <reference path="../../typings/index.d.ts" />

"use strict"



// ****************************************************************************
// Imports

const mongoose = require( "mongoose" )



// ****************************************************************************
// Model definition

// Post -- Title, Content

const postSchema = new mongoose.Schema({
  title  : String,
  content: String
})



// ****************************************************************************
// Exports

module.exports = mongoose.model( "Post", postSchema )
