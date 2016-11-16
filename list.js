//get Ids from the section tag variables. Note we also declare the variables 
//for 'Home' here, since we're throwing its listener in here as well. 

var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var homeView = document.getElementById("home-view");
var homeLink = document.getElementById("link-home");

//Add the hidden class to anything you don't want to see. Add visible to listView, and remove its "hidden" class. 
listLink.addEventListener("click", function(event) {
//event.prevent default stops something from doing its default action, i.e. a button submitting a form. 
//It doesn't seem necessary here, but I've included it for future reference.
	 event.preventDefault();
	 homeView.classList.add("hidden");
	 addView.classList.add("hidden");
	 listView.classList.add("visible");
	 listView.classList.remove("hidden");
});

//A seperate listener is needed for the Home button
homeLink.addEventListener("click", function(event) {
	addView.classList.add("hidden");
	listView.classList.add("hidden");
	homeView.classList.add("visible");
	homeView.classList.remove("hidden");
});



