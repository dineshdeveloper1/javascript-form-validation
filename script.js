function validateForm(){

    let fullName = document.querySelector('#fullname').value
    let fullNameLength = fullName.length
    
    let phoneNumber = document.querySelector('#phone').value
    let phoneNumberLength = phoneNumber.length

    if(fullNameLength <= 3){
        document.querySelector('.error_message').innerText = 'Name is required with minium 4 characters!!'

    } else if(phoneNumberLength !== 10){
        document.querySelector('.error_message').innerText = 'Phone number should be 10 digit'

    }else{
        document.querySelector('.error_message').innerText = ''
    }

}