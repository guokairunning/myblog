$(document).ready(function(){
 	 	var i=1;
 	    $(function(){ 
			run(); 
			var interval; 
			function run()
			{ 
			  
			  interval = setInterval(change_pic,"4000"); 
             
			} 
			
			function change_pic()
			{ 	
                 i++;
				if(i%2==0){
				$('.body_bgpic').css('background-image','url("img/bigbg1.png")');
			        
		         	      }
		        else    {
		        $('.body_bgpic').css('background-image','url("img/bigbg11.jpg")');
		         	    }
	        }
	           
	         });
		
					 	
 });