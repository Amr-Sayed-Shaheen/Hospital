/*--------------------------------------------------------------
# Custom
--------------------------------------------------------------*/


var down = false;
document.getElementById("bell").addEventListener("click", function() {
var color = $(this).text();
if(down){
$('#box').css('height','0px');
$('#box').css('opacity','0');
$('#box').css('display','none');
down = false;
}
else{
$('#box').css('height','auto');
$('#box').css('opacity','1');
$('#box').css('display','');
down = true;
}
});

/*--------------------------------------------------------------
# End Custom
--------------------------------------------------------------*/