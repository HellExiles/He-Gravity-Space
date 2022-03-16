const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const universeHeight = Math.floor(windowHeight * 3 / 4);
const universeWidth = Math.floor(windowWidth * 3 / 4);
const universe = document.getElementById("universe_frame");
const universeContext = universe.getContext("2d");

initAll();

function initAll() {
	initUniverse();
}

function initUniverse() {
	universe.height = universeHeight;
	universe.width = universeWidth;
	universeContext.fillStyle = "rgb(0, 0, 0)";
	universeContext.fillRect(0, 0, universeWidth, universeHeight);
}

function add_object_on_click() {
	const inputBox_mass = document.getElementById("add_object_mass");
	var mass = inputBox_mass.value;
	if(mass == null || mass <= 0) {
		confirm("The mass of the new object must be > 1!");
		mass = 1;
		inputBox_mass.value = "1";
	}
}