var _ = require("underscore");

var arr = Array();
var empty_board = [];

function enumerate_interval (n) {
	 return _.range(n);
}

function car (x) {
	 return x.slice(0,1);
}


function cdr (x) {
	 return x.slice(1,x.length);
}

 
function accumulate(mat)
{  
	if (mat.length>0) 
			 {
			 	arr.push(car(mat));
				return accumulate(cdr(mat))
			 }
	else 
			return arr;
}

function filter (proc,seq) {	  

	return _.filter(seq,proc)
}

function flat_map (proc,seq) { 
	return  _.map(seq,proc);
}


function queens (boards_size) {	
	function queen_cols (k) {
		if (k==0) 
		{ 

			return empty_board;
		}
		else
		{	
			return 
			filter(function  (positions) {
					 return safe(k,positions);
				},flat_map(function  (rest_queens) {
					 return _.map(enumerate_interval(boards_size),function(new_row){return adjoin_position(new_row,k,rest_queens)});
				},queen_cols(k - 1)));}	
	}
	queen_cols(boards_size);
}


function safe (k, positions) {
	function two_queens_safe (q1,q2) {
		 return ((car(q1)!=car(q2)) && ((car(q1)-cdr(q1))!=(car(q2)-cdr(q2))) && ((car(q1)+cdr(q1))!=(car(q2)+car(q1))))
	}

	var new_queen  = positions[positions.length-1];

	function check (i, positions) {
		if (i==k) {return true}
			else if(two_queens_safe(car(positions),new_queen))
			{
				return check((i+1),cdr(positions));
			}
			else 
			{
				return false;
			}
	}
	check(1,positions);
}


function adjoin_position (row, k, rest_queens) {
	 return [rest_queens,[row,k]];
}

var qu = queens(8);
   console.log(qu);


 