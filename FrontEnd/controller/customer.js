/*disabled button events*/
$(".customerLoginBtn").attr('disabled',true);

/*customer login form validation*/
var customerlogin_userName = /^[A-z ]{4,30}$/;
var customerlogin_password = /^[A-z,0-9 _]{4,10}$/;


/*when press 'Tab' event in customer login page tab should not fire*/
$('#customerUsername,#customerPassword').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

/*sign up button will fire, when all the fields validated */
function btnFire() {
    let temp_Username=$("#inputCustomerUsername").val();
    if(customer_userName.test(temp_Username)){
        let temp_Password=$("#inputCustomerPassword").val();
        if(customer_password.test(temp_Password)){
            let temp_Email=$("#inputCustomerEmail").val();
            if(customer_email.test(temp_Email)){
                let temp_Address=$("#inputCustomerAddress").val();
                if(customer_address.test(temp_Address)){
                    let temp_contact=$("#inputCustomerContact").val();
                    if(customer_contact.test(temp_contact)){
                        let temp_DLicenseNo=$("#inputCustomerDrivingLicenseNo").val();
                        if(customer_d_LicenseNo.test(temp_DLicenseNo)){
                            let temp_NIC=$("#inputCustomerNic").val();
                            if(customer_NIC.test(temp_NIC)){
                                $(".customerSignUpButton").attr('disabled', false);
                            }else{
                                $(".customerSignUpButton").attr('disabled', true);
                                return false;
                            }
                        }else{
                            $(".customerSignUpButton").attr('disabled', true);
                            return false;
                        }
                    }else{
                        $(".customerSignUpButton").attr('disabled', true);
                        return false;
                    }
                }else{
                    $(".customerSignUpButton").attr('disabled', true);
                    return false;
                }
            }else{
                $(".customerSignUpButton").attr('disabled', true);
                return false;
            }
        }else{
            $(".customerSignUpButton").attr('disabled', true);
            return false;
        }
    }else{
        $(".customerSignUpButton").attr('disabled', true);
        return false;
    }
}
function checkUserNameValidation(){
    let tempUsername = $("#inputCustomerUsername").val();
    if(customer_userName.test(tempUsername)){
        $("#inputCustomerUsername").css('border', '2px solid green');
        return true;
    }else {
        $("#inputCustomerUsername").css('border', '2px solid red');
    }
}
/*when fire keyup in username field*/
$("#inputCustomerUsername").keyup(function (event) {
    let temp = checkUserNameValidation();
    btnFire();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerPassword").focus();
    }
});

function checkPasswordValidation() {
    let tempPassword = $("#inputCustomerPassword").val();
    if (customer_password.test(tempPassword)) {
        $("#inputCustomerPassword").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerPassword").css('border', '2px solid red');
    }

}

/*when fire keyup in password field*/
$("#inputCustomerPassword").keyup(function (event) {
    let temp = checkPasswordValidation();
    btnFire();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerEmail").focus();
    }
});

function checkEmailValidation() {
    let tempEmail = $("#inputCustomerEmail").val();
    if (customer_email.test(tempEmail)) {
        $("#inputCustomerEmail").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerEmail").css('border', '2px solid red');
    }
}

/*when fire keyup in email field*/
$("#inputCustomerEmail").keyup(function (event) {
    let temp = checkEmailValidation();
    btnFire();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerAddress").focus();
    }
});

function checkAddressValidation() {
    let tempAddress = $("#inputCustomerAddress").val();
    if (customer_address.test(tempAddress)) {
        $("#inputCustomerAddress").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerAddress").css('border', '2px solid red');
    }
}

/*when fire keyup in address field*/
$("#inputCustomerAddress").keyup(function (event) {
    let temp = checkAddressValidation();
    btnFire();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerContact").focus();
    }
});

function checkContactValidation() {
    let tempConatct = $("#inputCustomerContact").val();
    if (customer_contact.test(tempConatct)) {
        $("#inputCustomerContact").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerContact").css('border', '2px solid red');
    }
}

/*when fire keyup in contact field*/
$("#inputCustomerContact").keyup(function (event) {
    let temp = checkContactValidation();
    btnFire();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerDrivingLicenseNo").focus();
    }
});

function checkDrivingValidation() {
    let tempDrivingLicense = $("#inputCustomerDrivingLicenseNo").val();
    if (customer_d_LicenseNo.test(tempDrivingLicense)) {
        $("#inputCustomerDrivingLicenseNo").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerDrivingLicenseNo").css('border', '2px solid red');
    }
}

/*when fire keyup in driving license field*/
$("#inputCustomerDrivingLicenseNo").keyup(function (event) {
    let temp = checkDrivingValidation();
    btnFire();
    if ("Enter" == event.key & temp == true) {
        $("#inputCustomerNICNo").focus();
    }
});

function checkNICValidation() {
    let tempNIC = $("#inputCustomerNICNo").val();
    if (customer_NIC.test(tempNIC)) {
        $("#inputCustomerNICNo").css('border', '2px solid green');
        return true;
    } else {
        $("#inputCustomerNICNo").css('border', '2px solid red');
    }
}

/*when fire keyup in NIC field*/
$("#inputCustomerNICNo").keyup(function (event) {
    let temp = checkNICValidation();
    btnFire();
    if ("Enter" == event.key & temp == true) {
        $(".customerSignUpButton").attr('disabled',false);
        $("#DrivingNICfile").focus();
    }
});

/*when click Sign Up button*/
