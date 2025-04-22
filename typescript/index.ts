//BASIC TYPES Declare variables of type string, number, and boolean. Assign values and log them.


const myString : string = "Hello World";
const myNumber : number = 42;
const myBoolean : boolean = true;

console.log(myString, myNumber, myBoolean);

//ARRAYS AND TUPLES Create an array of numbers and a tuple with a string and a number. Print both.


const myArray : number[] = [1,2,3,4,5];
const myTuple : [string, number] = ["Hello", 42];
const booleanTuple : [string, ...boolean[]] = ["Hello", true, false, true, false];

console.log(myArray, myTuple, booleanTuple);

//FUNCTIONS AND TYPE ANOTATIONS Write a function that takes two numbers as parameters, adds them, 
// and returns the result with type annotation
function add(a: number = 0, b: number = 0): number {
    return a + b;
}
console.log(add(2, 3)); 

//INTERFACES, OPTIONAL AND READONLY PROPERTIES Define an interface Person with properties name: string and age: number. 
// Create an object using this interface.Modify the Person interface to add an optional property email: 
// string and a readonly property id: number.


interface Person {
    name: string;
    age: number;
    email?: string;
    readonly id : number;
}

const person: Person = {
    name: "Vladimir",
    age: 23,
    id: 1
}

console.log(person);

//UNION TYPES. Create a function that accepts a parameter that can be either a string or number and logs it

function printId(id: number | string) {
    if(typeof id === 'number') {
        console.log("Your numberic ID is: " + id);
    } else {
        console.log(`Your string ID is ${id}`)
    }

}
printId(101);
printId("202");

//ALIASSES. Create a type alias UserID that can be a string or number. Use it to declare a variable.

type UserID = number | string;
const myID : UserID = 3;

//ENUM. Create an enum named Status with values Pending, InProgress, and Completed. Log one value.


enum Status {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
}

console.log(Status.Pending); 

//CLASSES AND CONSTRUCTORS. Create a class Car with properties brand: string and year: number. 
// Add a constructor and a method to display car details.


class Car {
    brand: string;
    year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    displayDetails() {
        console.log(`Car Brand: ${this.brand}, Year: ${this.year}`);
    }
}
//EXTENDING CLASSES. Create a subclass ElectricCar that extends Car and adds a batteryCapacity: number property
class ElectricCar extends Car {
    batteryCapacity: number;
    constructor(brand: string, year: number, batteryCapacity: number) {
        super(brand, year);
        this.batteryCapacity = batteryCapacity;
    }
}

// ---GENERICS---

//GENERIC FUNCTIONS. Create a generic function that takes an array of any type and returns its length.


function getLength<T extends Object>(arg: ReadonlyArray<T>): number {
    return arg.length;
}
console.log(getLength([1, 2, 3]));
console.log(getLength(["Hello", "World"]));

//GENERIC INTERFACES. Create a generic interface Box<T> with a property value: T. Instantiate it with a string.
interface Box<T> {
    value: T;
}
const stringBox: Box<string> = { value: "Hello" };
const numberBox: Box<number> = { value: 22 };

//TYPE ASSERTIONS. Declare a variable as unknown and use type assertion to treat it as a string.

const unknownString = 'Some string' as unknown as string

//UTILITY TYPES. Use the Partial utility type to create a version of Person where all properties are optional.


const unknownPerson: Partial<Person> = {
    id: 4} 

console.log(unknownPerson);

//MAPPED TYPES. Create a mapped type that makes all properties of Person optional.

type Optional<Type> = {
    [Property in keyof Type]+?: Type[Property]
}

type PersonOptional = Optional<Person>;

//INTERSECTION TYPES. Create two interfaces Employee and Manager. Use intersection types to merge them.


interface Employee {
    employeeId: number;
    name: string;
    age: number;
    department: string;
    salary: number;
}
interface Manager {
    managerId: number;
    name: string;
    age: number;
    teamSize: number;
    salary: number;
}
type EmployeeManager = Employee & Manager;

//KEYOF OPERATOR. Create an object and use the keyof operator to get its keys.


type usefullLettersObject = {
    a: string;
    b: number;
    c: boolean;
}
type usefullLetters = keyof usefullLettersObject; 

//RECORD TYPE. Create a Record<string, number> that maps employee names to their salaries

const employeeSalaries: Record<string, number> = {
    "Alex": 15000,
    "Vladimir": 20000,
    'Anna': 25000,
}

//DECORATORS. Create a class decorator that logs when a class is instantiated.

function logInst<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log(`New instance of class ${constructor.name} was created`);
      }
    };
  }

@logInst
class BugReport {
  type = "report";
  title: string;
  constructor(t: string) {
    this.title = t;
  }
}

//TYPE GUARDS. Write a function that checks if a variable is a string or number using type guards.

function isStrOrNum(value: any): value is string | number {
    return typeof value === 'string' || typeof value === 'number';
  }
   
  function handle(value: any) {
    if (isStrOrNum(value)) {
      console.log(value.toString());
    } else {
      console.log("Not a string or number");
    }
  }



