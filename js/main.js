// js

$(document).ready(function(){
 
 $('#con_btn').click(function(){
  var error_email = '';
  var error_subject = '';
  var error_phone = '';
  var error_address = '';
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if($.trim($('#email').val()).length == 0)
  {
   error_email = 'Email is required';
   $('#error_email').text(error_email);
   $('#email').addClass('has-error');
  }
  else
  {
   if (!filter.test($('#email').val()))
   {
    error_email = 'Invalid Email';
    $('#error_email').text(error_email);
    $('#email').addClass('has-error');
   }
   else
   {
    error_email = '';
    $('#error_email').text(error_email);
    $('#email').removeClass('has-error');
   }
  }

  if($('#subject').val() =="Choose...")
  {
   error_subject = 'Subject is required';
   $('#error_subject').text(error_subject);
   $('#subject').addClass('has-error');
  }

  else
  {
   error_subject = '';
   $('#error_subject').text(error_subject);
   $('#subject').removeClass('has-error');
  }
  
  if($.trim($('#phone').val()).length == 0)
  {
   error_phone = 'Phone Number is required';
   $('#error_phone').text(error_phone);
   $('#phone').addClass('has-error');
  }
   else
   {
    error_phone = '';
    $('#error_phone').text(error_phone);
    $('#phone').removeClass('has-error');
   }
  

  if($.trim($('#address').val()).length == 0)
  {
   error_address = 'Address is required';
   $('#error_address').text(error_address);
   $('#address').addClass('has-error');
  }

   else
   {
    error_address = '';
    $('#error_address').text(error_address);
    $('#address').removeClass('has-error');
   }

  if(error_email != '' || error_subject != '' || error_phone != '' || error_address != '')
  {
   return false;
  }
  else
  {
    $('#shipping_details').removeClass('active active_tab');
    $('#shipping_details').removeAttr('href data-toggle');
    $('#tab_shipping_details').removeClass('active');
    $('#shipping_details').addClass('inactive_tab');
    $('#payment_details').removeClass('inactive_tab');
    $('#payment_details').addClass('active_tab active');
    $('#payment_details').attr('href', '#tab_payment_details');
    $('#payment_details').attr('data-toggle', 'tab');
    $('#tab_payment_details').addClass('active in');
  }
 });
 
 $('#back_btn').click(function(){
     $('#payment_details').removeClass('active active_tab');
     $('#payment_details').removeAttr('href data-toggle');
     $('#tab_payment_details').removeClass('active in');
     $('#payment_details').addClass('inactive_tab');
     $('#shipping_details').removeClass('inactive_tab');
     $('#shipping_details').addClass('active_tab active');
     $('#shipping_details').attr('href', '#tab_shipping_details');
     $('#shipping_details').attr('data-toggle', 'tab');
     $('#tab_shipping_details').addClass('active in');
 });
 
 
});
