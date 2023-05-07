function changeHeaderBackgroundcolor(){
    let color=document.getElementsById('color-picker').value;
    console.log(color);
    let header = document.getElementById('header');
    header.style.backgroundColor = color;
}

function EnableDisableTextBox(btnPassport) {
    var txtPassportNumber = document.getElementById("txtPassportNumber");
    if (btnPassport.value == "Yes") {
        txtPassportNumber.removeAttribute("disabled");
    } else {
        txtPassportNumber.setAttribute("disabled", "disabled");
    }
}

