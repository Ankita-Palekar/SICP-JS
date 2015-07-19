var _ = require('underscore')

function make_mobile (left,right) {
	 return list(left,right)
}

function make_branch (length,structure) {
	return list(length,structure)
}

function left_branch(x)
{
	return car(x)[0]
}

function right_branch(x)
{
	return cdr(x)[0]
}

function branch_length (x) {
	return car(x)[0]
}

function branch_structure (x) {
	return cdr(x)[0]
}

function list () {return []	.slice.call(arguments)}//both functions are the same 

function check_last_branch (branch) {
	 if (isNumeric(branch_structure(branch)))  
	 	return true
	 else 
	 	return false
}


function cdr (z) {return  z.slice(1,z.length)}
function car (z) {return z.slice(0,1)}

function isNumeric (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
 
 function total_weight (tree) { 		 
 	 
 	 if (tree==null) {return 0;}
 	 else if(isNumeric(tree)) {console.log(tree); return tree; }
 	 else if( Array.isArray(left_branch(tree)==false) && Array.isArray(right_branch(tree))==false)
 	 		{return branch_structure(tree);}
 	 else 
 	 	{return total_weight(left_branch(tree)) + total_weight(right_branch(tree));}
 }


 


 
 
 var branch = make_branch(1,10);
 var mobile1 = make_mobile(make_branch(1,10),make_branch(2,10))
 var mobile2 = make_mobile(make_branch(2,20),make_branch(3,20))
 var mobile = make_mobile(make_branch(3,mobile1),make_branch(3,mobile2))



var m = total_weight(mobile)

console.log(m)