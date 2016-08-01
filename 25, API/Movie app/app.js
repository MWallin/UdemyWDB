"use strict";


// ******************************************
// Globals


const express = require( "express" );
const app = express();

const request = require( "request" );




// ******************************************
// App setup

app.set( "view engine", "ejs" );




// ******************************************
// Routes

app.get( "/", function( req, res ) {

  res.render( "search" );

});


app.get( "/results", function ( req, res ) {

  const baseURL = "http://www.omdbapi.com/?";


  const sTitle = "s=" + req.query.searchmovie;
  const sYear = "y=" + req.query.searchyear;
  const payLoad = sTitle + "&" + sYear;


  const searchURL = baseURL + payLoad;


  let data = undefined;


  request( searchURL, function( error, response, body ) {

    if ( !error && response.statusCode == 200 ) {

      data = JSON.parse( body );


      res.render( "results", {
        data: data
      });


    }


  });




});












// ******************************************
// Server

app.listen( 3000, function () {

  console.log( "Server is running" );

});
