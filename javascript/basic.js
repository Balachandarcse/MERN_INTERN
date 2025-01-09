//objects (i.e) map stores key value pairs which is in json format
obj={
    firstname:"bala",
    lastname:"chandar"
}
array=[10,'a',"bala",[10,20]]
console.log(array);
console.log(obj);
console.log(typeof(obj));
//ways of accessing the object
console.log(obj.firstname);
console.log(obj["lastname"]);
//ways for declaring the objects
obj1={}
obj2=new Object()
console.log(obj1);
obj1["dept"]='cse'
obj1['sec']="A"
obj2.cnt=150
obj2.sub=10
console.log(obj2)
console.log(obj1);
console.log(obj2);
set =new Set([1,2,3,4,8])
/* different ways to access the set elements
forEach(): Loops through all values, executes a function for each one.
for...of: Iterates directly over the Set values.
values(): Returns an iterator for the values, which you can iterate over using a loop.
entries(): Returns an iterator with [key, value] pairs, useful for key-value operations (though in Set, the key is the same as the value).
Convert to Array: Spread the Set into an array ([...mySet]) and use array methods.*/ 
console.log(typeof(set));
console.log(set);
console.log(set.values());
set.forEach(value => console.log(value));