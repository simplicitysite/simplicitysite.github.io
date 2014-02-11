$(document).ready(function(){
$("#contact_form").submit(function(){

var str = $(this).serialize();

   $.ajax({
   type: "POST",
   url: "http://doopnet.com/contact_form/contact.php",
   data: str,
   success: function(msg){
    
$("#note").ajaxComplete(function(event, request, settings){

if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
{
result = '<div class="notification_ok">Your message has been sent succesfully. Thank you!</div>';
$("#fields").hide();
}
else
{
result = msg;
}

$(this).hide();
$(this).html(result).slideDown("slow");

$(this).html(result);

});

}

 });

return false;

});

});
