/// <reference path="../typings/index.d.ts" />

"use strict";

// ******************************************
// Globals

const bodyParser = require( "body-parser" );

const express = require( "express" );
const app = express();




// ******************************************
// App setup

app.use( express.static( "public" ) );
app.use( bodyParser.urlencoded({extended: true}) );

app.set( "view engine", "ejs" );


const friends = ["Linda", "Miranda", "Amanda", "Suzy", "Lisa-Ann"];




// ******************************************
// Routes

app.get( "/", function ( req, res ) {

  res.render( "home" );


});


app.get( "/fallinlove/:thing", function ( req, res ) {

  const thing = req.params.thing;


  res.render( "love", {
    theThing: thing
  });


});


app.get( "/posts", function ( req, res ) {

  const posts = [
    {
      title : "Cats are the best",
      author: "Mike"
    },
    {
      title : "Why dogs are bad",
      author: "Susy"
    },
    {
      title : "Why cats are better!",
      author: "Anders"
    }
  ];


  res.render( "posts", {
    posts: posts
  });


});


app.get( "/friends", function ( req, res ) {

  res.render( "friends", {
    friends: friends
  });


});


app.post( "/addfriend", function ( req, res ) {

  const newFriend = req.body.newFriend;

  friends.push( newFriend );


  res.redirect( "/friends" );


});




// ******************************************
// Server

app.listen( 3000, function () {
  console.log( "### Server has started and is listening on port 3000 ###" );
});
