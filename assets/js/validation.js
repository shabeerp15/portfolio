const validated ={
    name:false,
    email:false,
    mobile:false,
    message:false
}

function nameChek() {
    var nameAlert = document.getElementById('name-alert');
    var name = document.getElementById("name").value;

    if (name == "" || name==null) {
        validated.name = false;
        nameAlert.innerHTML = "Required"
    }
    else{
        nameAlert.innerHTML = ""
        validated.name = true;
    }
}

function checkEmail() {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var emailCheck = document.getElementById('email').value;
    var emailAlert = document.getElementById('email-alert');
    if (emailCheck == "" || emailCheck == null) {
        emailAlert.innerHTML = "Required";
        validated.email = false;
    } else if (emailCheck.match(pattern)) {
        emailAlert.innerHTML = "";
        validated.email = true;
    } else {
        emailAlert.innerHTML = "Invalid Email Address";
        validated.email = false;
    }
}

function checkNumber() {
    var mobileNumber = document.getElementById('mobile').value;
    var mobileAlert = document.getElementById('mobile-alert');
    if (mobileNumber == "" || mobileNumber == null) {
        validated.mobile = false;
        mobileAlert.innerHTML = "Required";
    }
    else if(mobileNumber.length ==10 ){
        mobileAlert.innerHTML = "";
        validated.mobile = true; 
    }else if(mobileNumber.length <10 ){
            mobileAlert.innerHTML = "Enter Minimum 10 Number";
            validated.mobile = false;
    }else if(mobileNumber.length > 10){
            mobileAlert.innerHTML = "Entered out of 10 Numbers";
            validated.mobile = false;
    }
    else {
        validated.mobile = true;
    }
}

function checkMessage() {
    var messageValue = document.getElementById("message").value;
    if (messageValue.length <= 0) {
        document.getElementById("message-alert").innerHTML = "Enter Your Message"
        validated.message = false;
    }
    else if (messageValue.length <= 15) {
        document.getElementById("message-alert").innerHTML = "Enter atleast 15 charecter";
        validated.message = false;
    }
    else {
        document.getElementById("message-alert").innerHTML = "";
        validated.message = true;
    }
}

function allCheck(){
    if(validated.name&&validated.email&&validated.mobile&&validated.message){
        return true;
    }
    else{
        if(validated.name==false || validated.email==false || validated.phone==false || validated.messge==false){
            nameChek();
            checkEmail();
            checkNumber();
            checkMessage();
        }
        return false;
    }
}
