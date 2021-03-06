/// <reference path="../typings/index.d.ts" />

/* global $:false, jQuery:false */

// Check to see if jQuery is loaded OK
if (jQuery) {
  alert("jQuery loaded!");
} else {
  alert("jQuery not loaded :(!");
}


// Select all divs and give them a purple background
$("div").css("background", "purple");   

// Select the divs with class highlight and make them 200px wide
$(".highlight").css("width", "200px");

// Select the div with id "third"" and give it an orange border
$("#third").css("border", "5px solid orange");

// Select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");
