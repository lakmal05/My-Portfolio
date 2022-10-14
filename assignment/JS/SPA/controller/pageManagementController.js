
$(document).ready(function () {
    $('#dashboard').show();
    $('#customerSection').hide();
    $('#itemSection').hide();
    $('#orderSection').hide();
    $('#orderDetail').hide();

});



$('#home').click(function () {
    $('#dashboard').css('display', 'block')
    $('#customerSection').css('display', 'none');
    $('#itemSection').css('display', 'none');
    $('#orderSection').css('display', 'none');
    $('#orderDetail').css('display','none');

});



$('#customer').click(function () {
    $('#dashboard').css('display', 'none')
    $('#customerSection').css('display', 'block');
    $('#itemSection').css('display', 'none');
    $('#orderSection').css('display', 'none');
    $('#orderDetail').css('display','none');

});


$('#item').click(function () {
    $('#dashboard').css('display', 'none')
    $('#customerSection').css('display', 'none');
    $('#itemSection').css('display', 'block');
    $('#orderSection').css('display', 'none');
    $('#orderDetail').css('display','none');


});



$('#order').click(function () {
    $('#dashboard').css('display', 'none')
    $('#customerSection').css('display', 'none');
    $('#itemSection').css('display', 'none');
    $('#orderSection').show();
    $('#orderDetail').css('display','none');

});



$('#orderDetails').click(function (){

    $('#dashboard').css('display','none')
    $('#customerSection').css('display', 'none');
    $('#itemSection').css('display', 'none');
    $('#orderSection').css('display', 'none');
  $('#orderDetail').show();

});

