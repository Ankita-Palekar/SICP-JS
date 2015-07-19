	  var strt_ptr = null;
	  var curr_ptr = null;
	  var prev_obj = null;
	  var node = null;

function make_list () {
	 for (var i = 0; i < arguments.length; i++) 
	 {
		if (prev_obj==null) 
		{
			node = make_object(arguments[i]); 
			strt_ptr = node;
			prev_obj = node;
			}
		else
		{
			node = make_object(arguments[i]);
			prev_obj.ptr = node;
			prev_obj = node;
		}
	 };	 	 
} 

function display_list () {
	 	var temp_obj = strt_ptr;
	 	 	while(temp_obj!=null)
	 	 	 {
	 	 	 	 console.log(temp_obj.val);
	 	 	 	 console.log("->");
	 	 	 	 temp_obj=temp_obj.ptr;
	 	 	 }}

  function make_object (value) {
  	 return {val: value, ptr:null}
  }

  function make_circular () {
  	 for (var i = 0; i < arguments.length; i++) 
  	 {
  		if (prev_obj==null) 
  		{
  			node = make_object(arguments[i]); 
  			strt_ptr = node;
  			node.ptr = strt_ptr;
  			prev_obj = node;
  		 
  			}
  		else
  		{
  			
  			node = make_object(arguments[i]);
  			prev_obj.ptr = node;
  			node.ptr = strt_ptr;
  			prev_obj  = node;
  		}
  	 };	 	 
  }

// testin gif loop exists using the hare and tortoise problem 
  

  function check_loop (ptr) {
  	var hare_ptr = ptr;
  	var tor_ptr = ptr;
  	function loop () {
  		 	 if (hare_ptr==null) 
  		 	 	 console.log("cycle does not exist");
  		 	 	else {
  		 	 		hare_ptr = hare_ptr.ptr;
  		 	 		if (hare_ptr==null) 
  		 	 			 console.log("loop does not exist");
  		 	 			else
  		 	 			{
  		 	 				hare_ptr = hare_ptr.ptr;
  		 	 				tor_ptr = tor_ptr.ptr;
  		 	 				if(hare_ptr==tor_ptr)
  		 	 					 console.log("loop exist");
  		 	 				else loop();	
  		 	 			}
  		 	 	};
  		 }
  		 loop();	 
  }




 // make_list(1,2,3);  for circular link list
 make_circular(1, 2, 3, 4); for single link list
 check_loop(strt_ptr);



 