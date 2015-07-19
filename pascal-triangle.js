function pascal_traingle (row, col) {
	if (col > row) {return 0;} 
		else if(col < 0){return 0;}
			else if(col == 1){ return 1;}
				else {return (pascal_traingle ((row - 1), col)  + (pascal_traingle ((row - 1), (col - 1))))}
		}

function display_pascal_triangle (n) {
	document.body.innerHtml=" ";
	for (var i =  1; i <= n; i++) {
			// printing space
	 	 for (j = 1; j<=i; j++) {
	 	 		document.write(pascal_traingle(i,j));
 				document.write(" ");
	 	 }
	 	  document.write("</br>");
	 	}
	}









 