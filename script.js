function oksubmit() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let reason = document.getElementById("reason").value;
    console.log(fname)
    if(fname != "" && lname != "" && email != "" && reason != ""){
        alert("Form submitted successfully")
    }
    else{
        console.log("All fileds are required")
    }
  }
