/* VisitorName */
function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Revoneers");
    if (person == null || person == "") {
      text = "Anon";
    } else {
      text = person;
    }
    document.getElementById("hero-name").innerHTML = text;
}

/* Banner */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}
function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("hero-slider-img");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

/* ValidateForm */
function validateForm() {
    const name = document.forms["messageus-form"]["full-name"].value;
    const birthDate = document.forms["messageus-form"]["birth-date"].value;
    const gender = document.forms["messageus-form"]["gender"].value;
    const messages = document.forms["messageus-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Isi semua dong Bang");
        return false;
    }
    setSenderUI(name, birthDate, gender, messages)
    return false; 
}
function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
    return;
}