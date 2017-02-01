 $(document).ready(function(){
 	 	var page_height;
 	 	page_height=$(window).height();
 	 	$('.body_bgpic').css('height',page_height);
 	 	$('.introduce_bigbg').css('height',page_height);
 	    $(function(){ 
			run(); 
			var interval; 
			function run()
			{ 
			  interval = setInterval(change_pic,"3000"); 
			} 
			var arr=[1,2,3,4,5,6,7,8,9,10];
			function change_pic()
			{ 	arr.unshift(arr.pop());
				
				
                     
					 for(i=0;i<$('#pic_wall img').length;i++)
					 {  
			           $('#pic_wall img').eq(i).attr('src','img/wall'+arr[i]+'.jpg');
			         }
			}
	    	
	   
	         });
		
					 	
 });
 
  