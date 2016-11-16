//get ids from section tags. These variables are global, so they are shared between files. 

var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

/*add event listeners that first apply hidden to the other two elements, second add visible to the addView element,
and finally remove the class of hidden from the addView(current one you want to display) element.*/

addLink.addEventListener("click", function() {
	  homeView.classList.add("hidden");
	  listView.classList.add("hidden");
	  addView.classList.add("visible");
	  addView.classList.remove("hidden");
});







