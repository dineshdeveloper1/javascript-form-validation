function validateForm(form){
    console.log('validate form - function')

    console.log(form.fullname.value.trim().length)

    if(form.fullname.value.trim() === ''){
        valueChecking(form.fullname, "Name is required!!!")
    }else if(form.fullname.value.trim().length <= 3){
        valueChecking(form.fullname, "Name sould be more then 3")
    }else {
        valueSuccess(form.fullname)
    }
}


function valueSuccess(input){
    let formControl = input.parentElement;
    formControl.className = "form_control success";
}

function valueChecking(input, message){
    let formControl = input.parentElement;
    let formAlert = formControl.querySelector('.form_alert');
    formControl.className = "form_control invalid";
    formAlert.innerHTML = message
}




