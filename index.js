function submit() {
    // Get form values
    var fname = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gend").value;
    var number = document.getElementById("contact").value;
    var marital_status = document.getElementById("ms").value;
    var qf = document.getElementById("exam").value;
    var marks = document.getElementById("marks").value;
    var outof = document.getElementById("outof").value;
    var percent = document.getElementById("perc").value;
    // Save form values to localStorage
    localStorage.setItem("name", fname);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
    localStorage.setItem("number", number);
    localStorage.setItem("marital status", marital_status);
    localStorage.setItem("qf", qf);
    localStorage.setItem("marks", marks);
    localStorage.setItem("outof", outof);
    localStorage.setItem("percentage", percent);

    // Redirect to new page
    window.location.href = "next_page.html";

    // Prevent form submission
    return false;
}
