// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//create array using document.body.children
//iterate thru children
  //base case: if no children then check class list
  // if first element of class list matches then push that element into result

// if there are children then recurse the getlements by class name on the children
var getElementsByClassName = function(className) {
  // your code here



  var result = [];
  var body = document.body;

  //define inner function that takes in part of element tree
  var innerFunc = function(branch) {
    //also check the classList here

    if (branch.classList.length) {
      for (var j = 0; j < branch.classList.length; j++) {
        if (branch.classList[j] === className) {
          result.push(branch);
        }
      }
    }
    //if branch children is defined then do the for loop length undefined...
    if (branch.children.length !== 0) {
      for (var i = 0; i < branch.children.length; i++ ) {
        result.concat(innerFunc(branch.children[i]));
      }
    }
    return result;
  };
  //invoke that inner function, and that is recursed
  return innerFunc(body);


};

