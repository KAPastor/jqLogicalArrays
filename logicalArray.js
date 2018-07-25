// Need to remove elements
// Need to sort and set of arrays based on other set
// Need to find the intersection between two arrays

function la_intersection(){ // Variable arguments
	// Need to find the intersection of all argument arrays
	intersection_vector = arguments[0];
	for (i=1;i<arguments.length;i++){
		// Find the first set of intersections
		intersection_vector= intersection_vector.filter(value => -1 !== arguments[i].indexOf(value));
	}
	return intersection_vector;
}

// Performs a sort based on the first array and orders the rest
function la_sort(){
	sort_vector = arguments[0];
	index_val = sort_vector.map(function(e,i){return {ind: i, val: e}});
	index_val.sort(function(x, y){return x.val > y.val ? 1 : x.val == y.val ? 0 : -1});
	indices = index_val.map(function(e){return e.ind});

	// Sort the arrays
	return_vectors = [];
	for (i=0;i<arguments.length;i++){
		sorted_vector = []
		for (j=0;j<indices.length;j++){
			sorted_vector.push(arguments[i][indices[j]]);
		}
		return_vectors.push(sorted_vector)
	}
	return return_vectors;
}


function la_getAllIndex(){
	// First argument is the value to compare against and the second is the vector
	comp_val =  arguments[0];
	comp_array = arguments[1];
	out_idx = [];
	$.each(comp_array,function(i,v){
		if(v == comp_val){
			out_idx.push(i);
		}
	});
	return out_idx;
}
function la_removeAllOccurences(){

}
function la_replaceArray(array,find,replace) {
	out_array = [];
	$.each(array,function(l,v){
		  v = v.replace(find, replace);
		out_array.push(v);
	});

  return out_array;
};

function addCommas(nStr) {
	nStr += '';
	var x = nStr.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function convert(n) {
	var order = Math.floor(Math.log(n) / Math.LN10
					   + 0.000000001); // because float math sucks like that
	return Math.pow(10,order);
}

function la_unique(input) {
	return input.filter(function(value, index, self){
		return self.indexOf(value) === index;
	});
}
