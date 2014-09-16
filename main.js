// VICTIMS AND VOLUNTEERS
//		 An application that allows user to match people in need with volunteers
// 
// 1. Prompt user to ask how many disaster victims they wish to enter
// 2. For each victim that will be added, prompt the user to enter:
// 		Name
// 		Phone Number
// 		Street Address
// 
// 3. Add each newly entered victim to an object that will hold this info
// 4. Repeat steps 1 and 2, but for volunteers
// 		Create new object to hold volunteer info
// 
// 	5. Print out an alert that shows:
// 		Number of persons in need
//		Number of volunteers
// 		List of all persons in need and all volunteers
// 
// BONUS ONE: Change the program so that user can simply begin entering info and prompt
// 		them after each entry if they are done or they would like to add another
// 		
// BONUS TWO: Prompt the user to enter the name of someone in need, then display an alert
// 		that lists all of the volunteers that are on the same street



// Create an object that will hold Victim's Name, Phone Number, and Address
var victims = {
    name: [],
    address: [],
    phone: []
}

// Determine how many victims we're working with
var numVictims = prompt("How many disaster victims would you like to enter?");


// Create a function to add each victim's name/address/phone number
var addVictims = function() {
	for (i = 1; i <= numVictims; i++) {
        victims.name.push(prompt("Victim #" + i + "'s Name?"));
        victims.address.push(prompt("Victim #" + i + "'s Address?"));
        victims.phone.push(prompt("Victim #" + i + "'s Phone Number?"));
        alert("Great, Victim #" + i + " complete.")
    }
}

// Call addVictims function
addVictims();



// Create an object to hold same info for volunteers
var volunteers = {
	name: [],
	address: [],
	phone: []
}

// How many volunteers?
var numVolunteers = prompt("How many volunteers would you like to enter?");


// Create function to add each volunteer's name/address/phone#
var addVolunteers = function() {
	for (i = 1; i <= numVolunteers; i++) {
        volunteers.name.push(prompt("Volunteer #" + i + "'s Name?"));
        volunteers.address.push(prompt("Volunteer #" + i + "'s Address?"));
        volunteers.phone.push(prompt("Volunteer #" + i + "'s Phone Number?"));
        alert("Great, Volunteer #" + i + " complete.")
    }
}

// Call addVolunteers function
addVolunteers();

// Set up victim/volunteer name lists
var victimList = victims.name.join("\n");
var volunteerList = volunteers.name.join("\n");



// Alert that shows:
// 		number of persons in need
// 		number of volunteers
// 		list of all vics/vol's
alert(
	numVictims + " Victims\n\n" +
	numVolunteers + " Volunteers\n\n" +
	"List of Victims:\n\n" + victimList + "\n" +
	"List of Volunteers:\n\n" + volunteerList
	);







