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
    return '{}';
  } else if ( typeof obj === undefined ) {
    return '{}';
  } else if ( obj === null ) {
    return 'null';
  } else if ( typeof obj === 'string' ) {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    result += obj;
  } else if ( Array.isArray(obj) ) {

    var arr = obj.map(function(el) {
      return stringifyJSON(el);
    });

    return '[' + arr.join(',') + ']';
  } else if (typeof obj === 'object') {
    result += '{';
    for (var key in obj) {
      if ( typeof obj[key] === 'function' ) {
        return '{}';
      } else if ( typeof obj[key] === undefined ) {
        return '{}';
      }
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    if (Object.keys(obj).length !== 0) {
      result = result.slice(0, result.length - 1);
    }

    result += '}';
  }
  return result;
};
