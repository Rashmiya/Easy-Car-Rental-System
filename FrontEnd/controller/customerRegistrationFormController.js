/*disabled button events*/
$(".customerSignUpButton").attr('disabled',true);

/*customer SignUp form validation*/
var customer_userName = /^[A-z ]{4,30}$/;
var customer_password = /^[A-z,0-9 _]{4,10}$/;
var customer_email =/^[A-z,0-9]{2,20}[@][A-z]{2,10}[.][A-z]{2,20}$/;
var customer_address = /^[A-z0-9 ,/]{4,40}$/;
var customer_contact = /^(07)(0|1|2|4|5|6|7|8)(-)[0-9]{7}$/;
var customer_driving_LicenseNo = /^[0-9]{5,20}$/;
var customer_NIC = /^[0-9]{5,20}[A-z]$/;

/*when press 'Tab' event in customer Registration page,tab should not fire*/
$('#inputCustomerUsername,#inputCustomerPassword,#inputCustomerEmail,#inputCustomerAddress,#inputCustomerContact,#inputCustomerDrivingLicenseNo,#inputCustomerNICNo').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});
/*check each field validation*/
$("#inputCustomerUsername").keyup(function (event) {
    let username = $("#inputCustomerUsername").val();
    if (customer_userName.test(username)) {
        $("#inputCustomerUsername").css('border', '2px solid #41A050');
        $("#errorTextUsername").text("");
        if (event.key == "Enter") {
            $("#inputCustomerPassword").focus();
        }
    } else {
        $("#inputCustomerUsername").css('border', '2px solid red');
        $("#errorTextUsername").text("numbers not allowed");
    }
});

$("#inputCustomerPassword").keyup(function (event) {
    let password = $("#inputCustomerPassword").val();
    if (customer_password.test(password)) {
        $("#inputCustomerPassword").css('border', '2px solid #41A050');
        $("#errorTextPassword").text("");
        if (event.key == "Enter") {
            $("#inputCustomerEmail").focus();
        }
    } else {
        $("#inputCustomerPassword").css('border', '2px solid red');
        $("#errorTextPassword").text("should have minimum 4 characters");
    }
});

$("#inputCustomerEmail").keyup(function (event) {
    let mail = $("#inputCustomerEmail").val();
    if (customer_email.test(mail)) {
        $("#inputCustomerEmail").css('border', '2px solid #41A050');
        $("#errorTextEmail").text("");
        if (event.key == "Enter") {
            $("#inputCustomerAddress").focus();
        }
    } else {
        $("#inputCustomerEmail").css('border', '2px solid red');
        $("#errorTextEmail").text("rashmiya99@gmail.com");
    }
});

$("#inputCustomerAddress").keyup(function (event) {
    let address = $("#inputCustomerAddress").val();
    if (customer_address.test(address)) {
        $("#inputCustomerAddress").css('border', '2px solid #41A050');
        $("#errorTextAddress").text("");
        if (event.key == "Enter") {
            $("#inputCustomerContact").focus();
        }
    } else {
        $("#inputCustomerAddress").css('border', '2px solid red');
        $("#errorTextAddress").text("numbers , symbols allowed");
    }
});

$("#inputCustomerContact").keyup(function (event) {
    let contact = $("#inputCustomerContact").val();
    if (customer_contact.test(contact)) {
        $("#inputCustomerContact").css('border', '2px solid #41A050');
        $("#errorTextContact").text("");
        if (event.key == "Enter") {
            $("#inputCustomerDrivingLicenseNo").focus();
        }
    } else {
        $("#inputCustomerContact").css('border', '2px solid red');
        $("#errorTextContact").text("should use - for separation");
    }
});

$("#inputCustomerDrivingLicenseNo").keyup(function (event) {
    let drivingLicenseNo = $("#inputCustomerDrivingLicenseNo").val();
    if (customer_driving_LicenseNo.test(drivingLicenseNo)) {
        $("#inputCustomerDrivingLicenseNo").css('border', '2px solid #41A050');
        $("#errorTextDrivingLicense").text("");
        if (event.key == "Enter") {
            $("#inputCustomerNICNo").focus();
        }
    } else {
        $("#inputCustomerDrivingLicenseNo").css('border', '2px solid red');
        $("#errorTextDrivingLicense").text("Input driving License Number Correctly");
    }
});

$("#inputCustomerNICNo").keyup(function (event) {
    let nic = $("#inputCustomerNICNo").val();
    if (customer_NIC.test(nic)) {
        $("#inputCustomerNICNo").css('border', '2px solid #41A050');
        $('.customerSignUpButton').attr('disabled', false);
        if (event.key == "Enter") {
            $("#DrivingNICfile").focus();
        }
    } else {
        $("#inputCustomerNICNo").css('border', '2px solid red');
    }
});

