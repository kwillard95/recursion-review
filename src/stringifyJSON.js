// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//Input: obj
//Output: string

//Strategy:

//Base Cases:
//string
//number
//boolean
//null
//empty array
//empty obj

//result string (concat)
//if string return string
//if number, return number as a string
//if boolean, return boolean as string
//if null, return null as string
//if it's a function, return undefined
//if its undefined, return undefined
//if its an array and length zero, return string
//if its an array, if length is zero, return stringified brackets, else pop off last element and recursively call it
//if its an object,





var stringifyJSON = function(obj) {
  var result = '';
  if ( typeof obj === 'function' ) {
    return undefined;
  } else if ( typeof obj === undefined ) {
    return undefined;
  } else if ( obj === null ) {
    return 'null';
  } else if ( typeof obj === 'string' ) {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    result += obj;
  } else if ( Array.isArray(obj) ) {

    obj.map(function(el) {
      stringifyJSON(el);
    })
    // result += '[';
    // if ( obj.length ) {
    //   for (var i = 0; i < obj.length; i++) {
    //     result += stringifyJSON(obj[i]) + ',';
    //   }
    //   result = result.slice(0, obj.length);
    // }
    // result += ']';
  } else if (typeof obj === 'object') {
    result += '{';
    for (var key in obj) {
      result.concat(stringifyJSON(key), ':', stringifyJSON(obj[key]), ',');
    }
    result = obj.slice(0, obj.length);
    result += '}';
  }
  return result;
};
