 var _ = require("underscore");
 function cons (c1, c2) {return [c1, c2];}
 function cdr (z) {return  z.slice(1,z.length)}
 function car (z) {return z.slice(0,1)}
 function list () {return Array.prototype.slice.call(arguments)}//both definition are same 
 var subsets = Array([]);
 var maped;
function subset (set) {
	for (var i = 0; i < set.length; i++) {
			subsets.push(set[i]);
			 maped = _.map(subsets.slice(1,subsets.length-1),function(x){   
				 return (cons(set[i],x))});
				for (var j = 0; j < maped.length; j++) {
			 			 subsets.push(maped[j]);
			 			}
	}; 	
}
var m = Array(1,2,3);
subset(m);
console.log(subsets);
