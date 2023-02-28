/*In initial level*/
/*$("#homeContainer").css('display','block');
$("#aboutUsContainer").css('display','block');
$("#servicesContainer").css('display','block');
$("#fleetContainer").css('display','block');
$("#contactContainer").css('display','block');

$("#customerLoginPage").css('display','none');*/

// demo
$("#homeContainer").css('display','none');
$("#aboutUsContainer").css('display','none');
$("#servicesContainer").css('display','none');
$("#fleetContainer").css('display','none');
$("#contactContainer").css('display','none');
//own
$("#customerLoginPage").css('display','none');
$("#customerRegisterPage").css('display','block');

/*when click login button in HomePage*/
$("#button2").on('click',function (){
    $("#homeContainer").css('display','none');
    $("#aboutUsContainer").css('display','none');
    $("#servicesContainer").css('display','none');
    $("#fleetContainer").css('display','none');
    $("#contactContainer").css('display','none');

    $("#customerLoginPage").css('display','block');
});
/*when click back icon in Customer SignIn page*/
$("#backIcon").on('click',function (){
    $("#homeContainer").css('display','block');
    $("#aboutUsContainer").css('display','block');
    $("#servicesContainer").css('display','block');
    $("#fleetContainer").css('display','block');
    $("#contactContainer").css('display','block');

    $("#customerLoginPage").css('display','none');
});
/*when click back icon in Customer Register page*/
$("#RegistrationBackIcon").on('click',function (){
    $("#homeContainer").css('display','block');
    $("#aboutUsContainer").css('display','block');
    $("#servicesContainer").css('display','block');
    $("#fleetContainer").css('display','block');
    $("#contactContainer").css('display','block');

    $("#customerLoginPage").css('display','none');
    $("#customerRegisterPage").css('display','none');
});
/*when click create a new Account in Login page*/
$("#NewAccount").on('click',function (){
    $("#homeContainer").css('display','none');
    $("#aboutUsContainer").css('display','none');
    $("#servicesContainer").css('display','none');
    $("#fleetContainer").css('display','none');
    $("#contactContainer").css('display','none');

    $("#customerLoginPage").css('display','none');
    $("#customerRegisterPage").css('display','block');
});
/*when click have an account text in customer Registration Page*/
$("#backToLogin").on('click',function (){
    $("#homeContainer").css('display','none');
    $("#aboutUsContainer").css('display','none');
    $("#servicesContainer").css('display','none');
    $("#fleetContainer").css('display','none');
    $("#contactContainer").css('display','none');

    $("#customerLoginPage").css('display','block');
    /*$("#customerLoginPage").css('height' ,'90vh');*/
    $("#customerRegisterPage").css('display','none');
   /* $("#customerRegisterPage").css('height' ,'90vh');*/
});


//other
$("#customerLoginDetailsConatiner1").css('display','none');