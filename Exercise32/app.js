
//  Use querySelector and querySelectorAll to select elements from an HTML structure of your choice. 
// Log the selected elements to the console to verify the selections.
 const title = document.querySelector("#title");
 console.log("Title:", title)
 const firstPlace = document.querySelector(".place");
 console.log("First Place:", firstPlace)
 // querySelectorAll - dhammaan elements ayuu doortaa
 const allPlaces = document.querySelectorAll(".place");
 console.log("All Places:", allPlaces)
 // Element kasta log gare
 allPlaces.forEach(place => {
     console.log("Place:", place.textContent);
 });

  
