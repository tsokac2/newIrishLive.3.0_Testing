var newsletter = function(){
    document.getElementById("newsSent").addEventListener("click", send);
};

var validateName = function(e) {
    var valid;
    var name = document.getElementById("newsName");
    var nameValue = name.value.trim();

    if(nameValue === ""){
        pushErrorFor(name, "Enter Your name!");
        valid = false;
    } else if (nameValue.length < 2){
        pushErrorFor(name, "Enter Your full name!");
        valid = false;
    } else {
        pushSuccessFor(name);
        valid = true;
    }

    return valid;
};

var validateEmail = function(e) {
    var valid;
    var email = document.getElementById("newsEmail");
    var emailValue = email.value.trim();

    if(emailValue === "") {
        pushErrorFor(email, "Enter Your email address!");
        valid = false;
    } else if (!testEmail(emailValue)){
        pushErrorFor(email, "Enter valid email address!");
        valid = false;
    } else {
        pushSuccessFor(email);
        valid = true;
    }

    return valid;
};
/* START - CODE SOURCE: https://www.w3resource.com/javascript/form/email-validation.php*/
function testEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
/* END - CODE SOURCE: https://www.w3resource.com/javascript/form/email-validation.php*/

function pushErrorFor(input, errorMessage) {
    var formControl = input.parentElement;
    var small = formControl.querySelector("small");
    formControl.className = "form-group error";
    small.innerText = errorMessage;
}

function pushSuccessFor(input) {
    var formControl = input.parentElement;
    formControl.className = "form-group success";
}

var send = function(e) {
    e.preventDefault();
    e.stopPropagation();

    var checkName = validateName();
    var checkEmail = validateEmail();

    if(checkName === true && checkEmail === true) {
        sendEmail();
        reset();
        TnxForSupport("WOOHOO! Thank you for your support! You will receive a confirmation email soon. ");

    } else {
        validateName();
        validateEmail();
    }
};

var reset = function (e){
    document.getElementById("newsForm").reset();
};

function TnxForSupport(tnxMessage) {
    var tnx = document.getElementById("tnx");
    tnx.style.visibility = "visible";
    tnx.innerText = tnxMessage;
}

function sendEmail(inputs) {
    var tempInputs = {
        "from_name": document.getElementById("newsName").value,
        "from_email": document.getElementById("newsEmail").value
    };

    emailjs.send("service_yf3pn0p", "newIrishLife", tempInputs)
        .then(function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            });
            return false;
   }

document.addEventListener('DOMContentLoaded', newsletter);
