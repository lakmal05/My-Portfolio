$(document).ready(function () {
    $('#dashboard').show();
    $('#customerSection1').hide();
    $('#customerSection2').hide();
    $('#itemSection1').hide();
    $('#itemSection2').hide();
    $('#orderSection1').hide();
    $('#orderSection2').hide();
});

// Start When home click other section hide
$('#home').click(function () {
    $('#dashboard').css('display', 'block')
    $('#customerSection1').css('display', 'none');
    $('#customerSection2').css('display', 'none');
    $('#itemSection1').css('display', 'none');
    $('#itemSection2').css('display', 'none');
    $('#orderSection1').css('display', 'none');
    $('#orderSection2').css('display', 'none');
});
// End When home click other section hide

// Start When customer click other section hide
$('#customer').click(function () {
    $('#dashboard').css('display', 'none')
    $('#customerSection1').css('display', 'block');
    $('#customerSection2').css('display', 'block');
    $('#itemSection1').css('display', 'none');
    $('#itemSection2').css('display', 'none');
    $('#orderSection1').css('display', 'none');
    $('#orderSection2').css('display', 'none');
});
// End When customer click other section hide

// Start When item click other section hide
$('#item').click(function () {
    $('#dashboard').css('display', 'none')
    $('#customerSection1').css('display', 'none');
    $('#customerSection2').css('display', 'none');
    $('#itemSection1').css('display', 'block');
    $('#itemSection2').css('display', 'block');
    $('#orderSection1').css('display', 'none');
    $('#orderSection2').css('display', 'none');
});
// End When item click other section hide

// Start When order click other section hide
$('#order').click(function () {
    $('#dashboard').css('display', 'none')
    $('#customerSection1').css('display', 'none');
    $('#customerSection2').css('display', 'none');
    $('#itemSection1').css('display', 'none');
    $('#itemSection2').css('display', 'none');
    // $('#orderSection1').css('display', 'block');
    // $('#orderSection2').css('display', 'block');
    $('#orderSection1').show();
    $('#orderSection2').show();
});
// End When order click other section hide
