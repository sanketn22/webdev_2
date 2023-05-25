const submit = (e) => {

   // Get form values
    let fname = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    // let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gend").value;
    let number = document.getElementById("contact").value;
    let marital_status = document.getElementById("ms").value;
    let qf = document.getElementById("exam").value;
    let marks = document.getElementById("marks").value;
    let outof = document.getElementById("outof").value;
    let percent = document.getElementById("perc").value;

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

    console.log("name", "email", "gender", "number");
    
    e.preventDefault();

    // Redirect to new page
    location.href = 'page2.html'

    return false;
}
