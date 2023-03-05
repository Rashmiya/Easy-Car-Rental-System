/*In initial level*/
$("#homeContainer").css('display','block');
$("#aboutUsContainer").css('display','block');
$("#servicesContainer").css('display','block');
$("#fleetContainer").css('display','block');
$("#contactContainer").css('display','block');

$("#customerLoginPage").css('display','none');
$("#customerRegisterPage").css('display','none');
$("#adminLoginPage").css('display','none');
$("#registeredCustomerHomePage").css('display','none');

$("#adminDashboardPage").css('display','none');
$("#adminTopBar").css('display','none');
$("#dashboardView").css('display','none');

$("#adminCustomerPage").css('display','none');

$(".nav-item").css('border','0px solid gray');
$(".navbar").css('border','0px solid');
$(".navbar").css('box-shadow','0px 0px 0px 0px #ad6969');
$(".navbar").css('margin-top','20px');

// demo
/*$("#homeContainer").css('display','none');
$("#aboutUsContainer").css('display','none');
$("#servicesContainer").css('display','none');
$("#fleetContainer").css('display','none');
$("#contactContainer").css('display','none');
//own
$("#customerLoginPage").css('display','none');
$("#customerRegisterPage").css('display','none');
$("#adminLoginPage").css('display','none');
$("#demoPage").css('display','block');*/

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
$(".backIcon").on('click',function (){
    $("#homeContainer").css('display','block');
    $("#aboutUsContainer").css('display','block');
    $("#servicesContainer").css('display','block');
    $("#fleetContainer").css('display','block');
    $("#contactContainer").css('display','block');

    $("#customerLoginPage").css('display','none');
    $("#adminLoginPage").css('display','none');
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

    $("#customerRegisterPage").css('display','none');

});
/*when click Admin button in HomePage*/
$("#button1").on('click',function (){
    $("#homeContainer").css('display','none');
    $("#aboutUsContainer").css('display','none');
    $("#servicesContainer").css('display','none');
    $("#fleetContainer").css('display','none');
    $("#contactContainer").css('display','none');

    $("#customerLoginPage").css('display','none');
    $("#customerRegisterPage").css('display','none');
    $("#adminLoginPage").css('display','block');

    $("#adminDashboardPage").css('display','none');
    $("#adminTopBar").css('display','none');
    $("#dashboardView").css('display','none');
    $("#manageCustomersView").css('display','none');
});
/*when click login button in admin Panel*/
$(".adminLoginbtn").on('click',function (){
    $("#adminLoginPage").css('display','none');
    $("#adminDashboardPage").css('display','block');
    $("#dashboardView").css('display', 'block');

    $("#adminTopBar").css('display','block');
    $(".navbar-toggler").css('display','block');

    $(".navbar").css('border','2px solid #ad6969');
    $(".navbar").css('box-shadow','6px 6px 12px 4px #ad6969');
    $(".navbar").css('margin-top','0px');
    $("#adminDashboardPage").css('height','100vh');
  /*  $("#body").css('height','100vh');*/
    /*$("#adminDashboardPage").css('border','1px solid red');*/

    $("#manageCustomersView").css('display','none');
   /* $("#manageCustomersView").css('border','1px solid red');*/
});
/*when click customers button in Admin Panel*/
$("#manageCustomers").on('click',function (){
    $("#adminDashboardPage").css('display','none');
    $("#dashboardView").css('display','none');

    $("#panelName").text("Manage Customers");

    $("#adminTopBar").css('display','block');
    $(".navbar-toggler").css('display','block');

    $(".navbar").css('border','2px solid #ad6969');
    $(".navbar").css('box-shadow','6px 6px 12px 4px #ad6969');
    $(".navbar").css('margin-top','0px');

    $("#adminCustomerPage").css('display','block');
    $("#manageCustomersView").css('display','block');
});

/*when click dashboard button in Admin Panel*/
$("#dashboard").on('click',function () {
    $("#adminDashboardPage").css('display','block');
    $("#dashboardView").css('display','block');

    $("#panelName").text("");

    $("#adminTopBar").css('display','block');
    $(".navbar-toggler").css('display','block');

    $(".navbar").css('border','2px solid #ad6969');
    $(".navbar").css('box-shadow','6px 6px 12px 4px #ad6969');
    $(".navbar").css('margin-top','0px');

    $("#adminCustomerPage").css('display','none');
    $("#manageCustomersView").css('display','none');
});
/*when click logout button in Admin Panel*/
$("#logoutButton").on('click',function () {
    alert("You clicked"); /*logout wenna oneda kiyala alert eken ahala confirm nam witharak logout wenna*/
    $("#adminDashboardPage").css('display','block');
    $("#dashboardView").css('display','block');

    $("#panelName").text("");

    $("#adminTopBar").css('display','block');
    $(".navbar-toggler").css('display','block');

    $(".navbar").css('border','2px solid #ad6969');
    $(".navbar").css('box-shadow','6px 6px 12px 4px #ad6969');
    $(".navbar").css('margin-top','0px');

    $("#adminCustomerPage").css('display','none');
    $("#manageCustomersView").css('display','none');
});
