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
  var childrenArr = document.body.children;

  //define inner function that takes in part of element tree
  var innerFunc = function(branch) {
    for (var i = 0; i < branch.length; i++ ) {
      if (branch[i].children.length === 0 ) {
        var list = branch[i].children.classList;
        if (list[0] === className) {
          result.push(branch[i].children);
        }
      } else {
        var innerChild = innerFunc(branch[i].children);
        result.concat(innerChild);
      }

    }
    return result;
  };
  //invoke that inner function, and that is recursed
  innerFunc(childrenArr);


};

