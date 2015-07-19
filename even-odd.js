function same_parity () {
	 var even_or_odd= even(arguments[0]) ? true : false;	  
	 var elements = Array();
	 for (var i = 0; i < arguments.length; i++) {
	 			ele = arguments[i];
	 			if(even(ele) == even_or_odd)
	 				elements.push(ele);}
	 		return elements;
	 		}
function even (i) {return (i%2 == 0)}



//====================================================================================================
note : arguments is a magic object whiich stores the arguments in the lsited form . Note that it is an object and not the array. So if we want to perform any of the array operations on it we will need to do it on the object itself
