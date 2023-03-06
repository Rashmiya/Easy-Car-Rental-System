/*customer SignUp form*/
$(".customerSignUpButton").attr('disabled',true);
var customer_userName = /^[A-z]{2,20}$/;
var customer_password = /^[A-z,0-9 _]{4,10}$/;
var customer_email =/^[A-z,0-9]{2,20}[@][A-z]{2,10}[.][A-z]{2,20}$/;
var customer_address = /^[A-z,0-9 _]{4,10}$/;
var customer_contact = /^[0-9]{5,20}$/;
var customer_d_LicenseNo = /^[0-9]{5,20}$/;
var customer_NIC = /^[0-9][A-z]{5,20}$/;

/*when press 'Tab' event should not fire*/
$('#inputCustomerUsername,#inputCustomerPassword,#inputCustomerEmail,#inputCustomerAddress,#inputCustomerContact,#inputCustomerDrivingLicenseNo,#inputCustomerNICNo').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});