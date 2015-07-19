var _ = require("underscore");

var array1 = Array(1,2,3);
var array2 = Array(1,2,3);
var array3 = Array([1,2,3],[])

 function dot_product (m,n) {
 	 return _.reduce(_.zip(m,n),function(memo, x){
 	 	return memo + x[0]*x[1];
 	 }, 0);
 }

 var d_p = dot_product(array1,array2);
   

function matrix_mul_vector(m,v)
{
	var m_v = _.map(m,function(x){return dot_product(x,v)});
	return m_v;
}

var m_v = matrix_mul_vector(array1,array2);

  // console.log(m_v);



 

function car (x) {
	 return x.slice(0,1);
}


function cdr (x) {
	 return x.slice(1,x.length);
}


function cons (x,y) {
 	 return [x,y];
 } 

var tr = Array();

 

function collect(partial)
{
 	tr.push(partial);
}
 
   

var d_p = dot_product(array1,array2);
 console.log(d_p);

 
