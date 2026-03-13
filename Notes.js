// Array Notes=>

// at() =>
// The at() method return an indexed element from an array.
// The at() method return the same as []
// the at() method is supported in all modern browser since March 2022.

// concat()=>
// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joinded arrays.
// The concat() method does not change the existing arrays.

// constructor()=>
// The consturctor property return the fucntion that created the array prototype.
// For javaScipt array the constructor proptery returns:
// fucntion Array() { [native code]}

// copyWithin()=>
// The copyWithin() method copies array elements to antother poistion in an array.
// The copyWithin() method overwrite the existing values.
// The copyWithin() method does not add items to the array.
// Prameters=>
// target => required => the index (position) to copy the element to.
// start  => Optional => The Start index (position). Default  is 0.
// end    => Optional => The end index (position). Default is the array length.
// Return Value => Array => The change array

// entries()=>
// The entries() method returns an Iterator object with the key/value pairs from an array:
// [0,"banana"]
// [1,"Apple"]
// [2,"Mango"]
// The entrires() Method does not change the original array.
// Return=> An Iterable object with the key/value poir from the array
// Note:>
// its is not good practice to save an iterator.
// The iterator has a next() method to access each element onet at time.
// As soon as you start using it, it cannot be reset or restarted.

// every()=>
// The every() method executes a function for each array element.
// The every() method return true if the function returns true for all elements.
// The every() method return false if the function returns false for one element.
// The every() method does not execute the fucntion for empty elements.
// The every() method does not change the origanl array.
// Prameters---=>
// fucntion=> Requird => A fucntion to be run for each element in the array.
// currentValue = Requird => The value of the current element.
// index => Optional => The index of the current element
// arr => Optional => The array of the current element.
// thisValue => Optional . Dafault > "undefined" => 
// A value passed to the fucntion as its "this" value.
// Return =>
// Boolean => True if all element pass the test, other wise false.

/*
fill()=>
The Fill() Method fills specified elements in an array with a value.
The fill() method overwrites the original array.
Start and end position can be specified. if not , all element will be filled.
Syntex=>
array.fill(value,start,end)
Parameters=>
value ==> the value to fill in.
start ==> The Start index(Position)
end   ==> The Stop index( Default is Array Length)
Return:
The Filled Array
*/

/*
Filter()=>
The filter method creates a nea arrray filled with elemetns tha t pass a test provided by a funcition.
The Filter method does not execute the function for empty elements.
The filter method does not change the original array.
SYNTEX=>
array.filter(fucntion(currentValue,index,arr),thisValue)
PARAMETER=>
// fucntion=> Requird => A fucntion to be run for each element in the array.
// currentValue = Requird => The value of the current element.
// index => Optional => The index of the current element
// arr => Optional => The array of the current element.
// thisValue => Optional . Dafault > "undefined" => 
// A value passed to the fucntion as its "this" value.

*/

/*
DESCRIPTION:>
The find() method return the value of the first element that passes a test.
The find() method executes a function for each array element.
The Find() method return Undefined if no element are found.
The find() method does not execute the function for empty elements.
The find() method does not change the origianl array.
SYNTEX:> 
array.finc(function(currentValue,index,arr),thisValue)

*/