document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    let fname = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gend")
        gender = gender.options[gender.selectedIndex].text
    let number = document.getElementById("contact").value;
    let marital_status = document.getElementById("ms")
        marital_status = marital_status.options[marital_status.selectedIndex].text
    let qf = document.getElementById("exam").value;
    let marks = document.getElementById("marks").value;
    let outof = document.getElementById("outof").value;
    let percent = (Number.parseFloat(marks)/Number.parseFloat(outof))*100

    // Save form values to localStorage
    localStorage.setItem("name", fname);
    localStorage.setItem("email", email);
    localStorage.setItem("dob", dob);
    localStorage.setItem("gender", gender);
    localStorage.setItem("number", number);
    localStorage.setItem("marital_status", marital_status);
    localStorage.setItem("qf", qf);
    localStorage.setItem("marks", marks);
    localStorage.setItem("outof", outof);
    localStorage.setItem("percentage", percent);

    console.log({ fname, email, dob, gender, number, marital_status, qf, marks, outof, percent });

    // Redirect to new page
    window.location.href = "./page2.html";
});