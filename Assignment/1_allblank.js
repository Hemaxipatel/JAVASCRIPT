function form_value_blank() {
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let addr = document.getElementById("addr").value;
    let dob = document.getElementById("dob").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    // let gen = document.getElementById("gen").value;
    let exp = document.getElementById("exp").value;
    let mob = document.getElementById("mob").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    if (fname == "" && mname == "" && lname == "" && addr == "" && dob == "" && male == false && female == false && exp == "" && email == "" && pass == "") {
        document.getElementById("msg1").innerText = "Enter First Name";
        document.getElementById("msg2").innerText = "Enter Middle Name";
        document.getElementById("msg3").innerText = "Enter Last Name";
        document.getElementById("msg4").innerText = "Enter Address";
        document.getElementById("msg5").innerText = "Please Select date of birth";
        document.getElementById("msg6").innerText = "Please select gender";
        document.getElementById("msg7").innerText = "Please Select Experience";
        document.getElementById("msg8").innerText = "Enter Mobile No";
        document.getElementById("msg9").innerText = "Enter Email id";
        document.getElementById("msg10").innerText = "Enter Password";
        return false
    }
}