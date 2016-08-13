/// <reference path="../../../typings/index.d.ts" />

"use strict"

const passportLocalMongoose = require( "passport-local-mongoose" )
const mongoose = require( "mongoose" )



const UserSchema = new mongoose.Schema({
  username: String,
  passowrd: String
})

UserSchema.plugin( passportLocalMongoose )


module.exports = mongoose.model( "User", UserSchema )
