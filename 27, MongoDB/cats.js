/// <reference path="../typings/index.d.ts" />

"use strict";

const mongoose = require( "mongoose" );

mongoose.connect( "mongodb://localhost/cat_app" );

const catSchema = mongoose.Schema({
  name       : String,
  age        : Number,
  temperament: String
});

const Cat = mongoose.model( "Cat", catSchema );

/*
const george = new Cat({
  name       : "Mrs. Norris",
  age        : 17,
  temperament: "Evil"
});


george.save( ( err, cat ) => {

  if ( err ) {

    console.log( "Something went wrong" );

  } else {

    console.log( "George is saved for the future!!!" );
    console.log( cat );

  }


});

*/

Cat.create({
  name       : "Kajsa",
  age        : "2",
  temperament: "Egen"
},
  ( err, cat ) => {

    if ( err ) {
      console.log( "Oups: " + err );

    } else {
      console.log( "Cat: " + cat );

    }
  }
);


Cat.find({}, ( err, cats ) => {

  if ( err ) {
    console.log( "Oh no!!!!!" );
    console.log( err );

  } else {
    console.log( "All the cats" );
    console.log( cats );

  }

});
