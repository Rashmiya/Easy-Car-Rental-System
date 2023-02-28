/*In initial level*/
$("#homeContainer").css('display','block');
$("#aboutUsContainer").css('display','block');
$("#servicesContainer").css('display','block');
$("#fleetContainer").css('display','block');
$("#contactContainer").css('display','block');

$("#customerLoginPage").css('display','none');

// demo
/*$("#homeContainer").css('display','none');
$("#aboutUsContainer").css('display','none');
$("#servicesContainer").css('display','none');
$("#fleetContainer").css('display','none');
$("#contactContainer").css('display','none');
//own
$("#customerLoginPage").css('display','block');*/

/*when click login button in HomePage*/
$("#button2").on('click',function (){
    $("#customerLoginPage").css('display','block');

    $("#homeContainer").css('display','none');
    $("#aboutUsContainer").css('display','none');
    $("#servicesContainer").css('display','none');
    $("#fleetContainer").css('display','none');
    $("#contactContainer").css('display','none');
});

$("#backIcon").on('click',function (){
    $("#customerLoginPage").css('display','none');

    $("#homeContainer").css('display','block');
    $("#aboutUsContainer").css('display','block');
    $("#servicesContainer").css('display','block');
    $("#fleetContainer").css('display','block');
    $("#contactContainer").css('display','block');
});
//other
$("#customerLoginDetailsConatiner1").css('display','none');