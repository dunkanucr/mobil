jQuery(document).ready(function(){ 
var id;
$(".inicio").click(function(){
 $(".inicio").hide(); 
$("#Home").css("display", "block").stop().slideDown("slow", function() {
        $("#Home").effect("bounce", {
            times: 4, distance: 9
        }, 450);
     });;
id = $("#Home").attr("id");  
    });

             
   
}); 

 $(".MO").click(function(){
		// $(".oculto").css("display", "none"); 
		  
          var nodo = $(this).attr("href"); 
          if ($(nodo).is(":visible")){
			  
		 $(nodo).css("display", "block").stop().slideDown("slow", function() {
        $(nodo).effect("bounce", {
            times: 4, distance: 4
        }, 150);
     });
			  
               return true;
          }else{	
		//alert("#"+id);
		//$("#"+id).css("display", "none"); 


	$(".oculto").hide();
                     
    $(nodo).css("display", "block").stop().slideDown("slow", function() {
        $(nodo).effect("bounce", {
            times: 4, distance: 5
        }, 250);
     });

   


	//$(nodo).show();
		
	//	id = $(nodo).attr("id"); 
        return true;
          }   
  			
  
    });
	
	

