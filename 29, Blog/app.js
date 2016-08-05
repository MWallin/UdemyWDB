/// <reference path="../typings/index.d.ts" />

"use strict"


// *****************************************************************************
// Imports

const expressSanitizer = require( "express-sanitizer" )
const methodOverride   = require( "method-override" )
const bodyParser       = require( "body-parser" )
const mongoose         = require( "mongoose" )
const express          = require( "express" )

const app = express()




// *****************************************************************************
// App set up

app.set( "view engine", "ejs" )

app.use( express.static( "public" ) )
app.use( bodyParser.urlencoded({extended: true}) )
app.use( methodOverride( "_method" ) )
app.use( expressSanitizer() );

mongoose.connect( "mongodb://localhost/restful_blog" )


// *****************************************************************************
// DB-set up

const blogSchema = mongoose.Schema({
  title  : String,
  image  : String,
  body   : String,
  created: {
    type   : Date,
    default: Date.now()
  }
})

const Blog = mongoose.model( "Blog", blogSchema )


// Blog.create({
//   title: "Cats are awesome",
//   image: "https://hd.unsplash.com/photo-1455970022149-a8f26b6902dd",
//   body : "Just because they are, look at their beautiful green eyes and furry pelt."
// })


// *****************************************************************************
// DB-set up

// ROOT
app.get( "/", ( req, res ) => {

  res.redirect( "/blogs" )

})




// INDEX
app.get( "/blogs", ( req, res ) => {

  Blog.find(
    {},
    ( err, blogsDB ) => {

      if ( err ) {
        console.log( "ERROR: " + err );

      } else {
        res.render( "index", {
          blogs: blogsDB
        })

      }


    }
  )
})




// NEW
app.get( "/blogs/new", ( req, res ) =>{

  res.render( "new" )

})




// CREATE
app.post( "/blogs", ( req, res ) => {

  // Get data from post
  const blogData = req.body.blog

  blogData.body = req.sanitize( blogData.body )


  //Add blog to DB
  Blog.create( blogData,
  ( err, newblog ) => {

    if ( err ) {

      console.log( "ERROR" + err );
      res.redirect( "/blogs/new" )

    } else {

      // Redirect user
      res.redirect( "/blogs" )

    }
  })
})




// SHOW
app.get( "/blogs/:id", ( req, res ) => {

  // Get parameters
  const blogID = req.params.id

  // Find correct blog-post
  Blog.findById( blogID,
    ( err, foundBlogPost ) => {
      if ( err ) {

        console.log( "ERROR: " + err );
        res.redirect( "/blogs" )

      } else {

        // Show the blog post
        res.render( "show", {
          blog: foundBlogPost
        })

      }
    }
  )
})


// EDIT
app.get( "/blogs/:id/:edit", ( req, res ) => {

   // Get parameters
  const blogID = req.params.id

  // Find correct blog-post
  Blog.findById( blogID,
    ( err, foundBlogPost ) => {
      if ( err ) {

        console.log( "ERROR: " + err );
        res.redirect( "/blogs" )

      } else {

        // Show the blog post
        res.render( "edit", {
          blog: foundBlogPost
        })

      }
    }
  )

})



// UPDATE
app.put( "/blogs/:id", ( req, res ) =>{

  // Get data from post
  const blogID = req.params.id
  const blogData = req.body.blog

  blogData.body = req.sanitize( blogData.body )


  //Add blog to DB
  Blog.findByIdAndUpdate( blogID, blogData,
    ( err, updatedBlog ) => {

      if ( err ) {

        console.log( "ERROR" + err );
        res.redirect( "/blogs" )

      } else {

        // Redirect user
        res.redirect( "/blogs/" + blogID )

      }
    }
  )
})


// DELETE
app.delete( "/blogs/:id", ( req, res ) => {

  // Get data from post
  const blogID = req.params.id

  // Delete blogpost
  Blog.findByIdAndRemove( blogID, err => {

    if ( err ) {

      console.log( "ERROR: " + err );

    } else {

      // Redirect
      res.redirect( "/blogs" )

    }
  })
})




// *****************************************************************************
// Server start

app.listen( 3000, () => {
  console.log( "Server is running" );
})
