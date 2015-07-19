function cons (x, y) {return function(w){return w(x, y)}}
function car(z){return z(function(x, y){return x})}
function cdr(z) {return z(function(x, y){return y})}
var list = cons ((cons 1, 2), (cons 2, (cons 4, null)))
var list = cons ((cons 1, 2), (cons 2, (cons 4, null)))


var x  = {value : 0, 
 					next_ptr: null}
 
 function cons (c1, c2) {return [c1, c2];}
 function cdr (z) {return  z.slice(1,z.length)}
 function car (z) {return z.slice(0,1)}
 function list () {return Array.prototype.slice.call(arguments)}//both definition are same 
 function list () {return [].slice.call(arguments)}//both functions are the same 


function reverse(list_args){ console.log(list_args);
												if(list_args.length==0) null
													else 
												return Array(reverse(cdr(list_args)), car (list_args)) }


function reverse_list (x) {
 	var temp;
 	var length = x.length-1;
 	for (var i = 0; i <  length/2; i++) {
 		 temp = x[i];
 		 x[i] = x[length-i];
 		 x[length-i]=temp;
 		  console.log(length-i);
 	};
 	return x;
}





function deep_reverse (x) {
	 var temp;
	 var length = x.length-1;
	 var reverse
	 for (var i = 0; i <= length/2; i++) {
				 	  if(Array.isArray(x[i])&&Array.isArray(x[length-i]))
				 	  {
				 	  	reverse1 = deep_reverse(x[i]);
				 	  	reverse2 = deep_reverse(x[length-i]);
				 	  	x[i] =reverse2;
				 	  	x[length-i] = reverse1;
				 	  }
				 	  else if (Array.isArray(x[i]))
				 			{
				 				reverse=deep_reverse(x[i]); 
 		 						x[i] = x[length-i];
 		 						x[length-i]=reverse;			 			 
				 			}
				 		else if(Array.isArray(x[length-i]))
				 		{

				 			reverse=deep_reverse(x[length-i]);
 		 					x[length-i]=x[i];
 		 					x[i] = reverse;
				 		}				 		 
				 		else {
				 			 		 temp = x[i];
 		 							x[i] = x[length-i];
 		 							x[length-i]=temp;}};
	 return x;
}

 