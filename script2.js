
// Retrieve form data from localStorage
let fname = localStorage.getItem("name");
let email = localStorage.getItem("email");
let dob = localStorage.getItem("dob");
let gender = localStorage.getItem("gender");
let contact = localStorage.getItem("number");
let marital_status = localStorage.getItem("ms");
let qf = localStorage.getItem("qf");
let marks = localStorage.getItem("marks");
let outof = localStorage.getItem("outof");
let perc = localStorage.getItem("percentage");


// Update HTML with form data
document.getElementById("name1").textContent = fname;
document.getElementById("email1").innerHTML = email;
document.getElementById("gend1").innerHTML = gender;
document.getElementById("contact1").innerHTML = contact;
document.getElementById("ms1").innerHTML = marital_status;
document.getElementById("qf1").innerHTML = qf;
document.getElementById("outof1").innerHTML = outof;
document.getElementById("perc1").innerHTML = perc;
document.getElementById("dob1").innerHTML = dob;
document.getElementById("marks1").innerHTML = marks;

// Clear localStorage
// localStorage.clear();