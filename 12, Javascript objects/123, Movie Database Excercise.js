// Define movie objects in an array
var movies = [
  {
    title: "Porn",
    rating: "9.8",
    hasWatched: true
  },
  {
    title: "Die hard",
    rating: "7.6",
    hasWatched: true
  },
  {
    title: "Die hard 2",
    rating: "5.7",
    hasWatched: false
  },
  {
    title: "The office",
    rating: "7.8",
    hasWatched: false
  },
  {
    title: "Sherlock Holmes",
    rating: "6.9",
    hasWatched: false
  },
  {
    title: "Cruel intentions",
    rating: "9.6",
    hasWatched: true
  }
];





// Loop throughe the array of movies, calling printMovieStatus
movies.forEach(function(movie) {
  printMovieStatus(movie);
});


// The function printMovieStatus
function printMovieStatus(movie) {

  var printString = "You have ";

  if (movie.hasWatched === true) {
    printString += "watched ";
  } else {
    printString += "not seen ";
  }

  printString += "\"" + movie.title + "\" ";

  printString += "- " + movie.rating + " stars";


  console.log(printString);
}

