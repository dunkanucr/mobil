
$(document).ready(function(){
   
    var item = $('.nav-item').hammer();
    item.on("tap", function(ev){
         alert("touch");
    });
});

