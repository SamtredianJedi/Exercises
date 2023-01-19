// JavaScript Object by object literal

emp = { id: 102, name: "Rezo Xuchua", salary: 40000 }
document.write(emp.id + " " + emp.name + " " + emp.salary);


// By creating instance of Object

var emp = new Object();
emp.id = 101;
emp.name = "Rezo Xuchua";
emp.salary = 50000;
document.write(emp.id + " " + emp.name + " " + emp.salary);


// By using an Object constructor

/*
Here, you need to create function with arguments. Each argument value can be assigned in the current object by using this keyword.

The this keyword refers to the current object.

The example of creating object by object constructor is given below.

*/

function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
e = new emp(103, "Vimal Jaiswal", 30000);

document.write(e.id + " " + e.name + " " + e.salary);

/* 

    Defining method in JavaScript Object
We can define method in JavaScript object. But before defining method, we need to add property in the function with same name as method.

The example of defining method in object is given below.

*/

function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.changeSalary = changeSalary;

    function changeSalary(otherSalary) {
        this.salary = otherSalary;
    }
}
e = new emp(103, "Sonoo Jaiswal", 30000);
document.write(e.id + " " + e.name + " " + e.salary);
e.changeSalary(45000);
document.write("<br>" + e.id + " " + e.name + " " + e.salary);

// Js object Methods

/*

    1	Object.assign()	This method is used to copy enumerable and own properties from a source object to a target object
2	Object.create()	This method is used to create a new object with the specified prototype object and properties.
3	Object.defineProperty()	This method is used to describe some behavioral attributes of the property.
4	Object.defineProperties()	This method is used to create or configure multiple object properties.
5	Object.entries()	This method returns an array with arrays of the key, value pairs.
6	Object.freeze()	This method prevents existing properties from being removed.
7	Object.getOwnPropertyDescriptor()	This method returns a property descriptor for the specified property of the specified object.
8	Object.getOwnPropertyDescriptors()	This method returns all own property descriptors of a given object.
9	Object.getOwnPropertyNames()	This method returns an array of all properties (enumerable or not) found.
10	Object.getOwnPropertySymbols()	This method returns an array of all own symbol key properties.
11	Object.getPrototypeOf()	This method returns the prototype of the specified object.
12	Object.is()	This method determines whether two values are the same value.
13	Object.isExtensible()	This method determines if an object is extensible
14	Object.isFrozen()	This method determines if an object was frozen.
15	Object.isSealed()	This method determines if an object is sealed.
16	Object.keys()	This method returns an array of a given object's own property names.
17	Object.preventExtensions()	This method is used to prevent any extensions of an object.
18	Object.seal()	This method prevents new properties from being added and marks all existing properties as non-configurable.
19	Object.setPrototypeOf()	This method sets the prototype of a specified object to another object.
20	Object.values()	This method returns an array of values. */