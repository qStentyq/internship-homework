//BASIC TYPES Declare variables of type string, number, and boolean. Assign values and log them.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var myString = "Hello World";
var myNumber = 42;
var myBoolean = true;
console.log(myString, myNumber, myBoolean);
//ARRAYS AND TUPLES Create an array of numbers and a tuple with a string and a number. Print both.
var myArray = [1, 2, 3, 4, 5];
var myTuple = ["Hello", 42];
var infinityBooleanTuple = ["Hello", true, false, true, false];
console.log(myArray, myTuple, infinityBooleanTuple);
//FUNCTIONS AND TYPE ANOTATIONS Write a function that takes two numbers as parameters, adds them, 
// and returns the result with type annotation
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
var person = {
    name: "Vladimir",
    age: 23,
    id: 1
};
console.log(person);
//UNION TYPES. Create a function that accepts a parameter that can be either a string or number and logs it
function printId(id) {
    console.log("Your ID is: " + id);
}
printId(101);
printId("202");
var myID = 3;
//ENUM. Create an enum named Status with values Pending, InProgress, and Completed. Log one value.
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["InProgress"] = "IN_PROGRESS";
    Status["Completed"] = "COMPLETED";
})(Status || (Status = {}));
console.log(Status.Pending);
//CLASSES AND CONSTRUCTORS. Create a class Car with properties brand: string and year: number. 
// Add a constructor and a method to display car details.
var Car = /** @class */ (function () {
    function Car(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    Car.prototype.displayDetails = function () {
        console.log("Car Brand: ".concat(this.brand, ", Year: ").concat(this.year));
    };
    return Car;
}());
//EXTENDING CLASSES. Create a subclass ElectricCar that extends Car and adds a batteryCapacity: number property
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(brand, year, batteryCapacity) {
        var _this = _super.call(this, brand, year) || this;
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    return ElectricCar;
}(Car));
// ---GENERICS---
//GENERIC FUNCTIONS. Create a generic function that takes an array of any type and returns its length.
function getLength(arg) {
    return arg.length;
}
console.log(getLength([1, 2, 3]));
console.log(getLength(["Hello", "World"]));
var stringBox = { value: "Hello" };
var numberBox = { value: 22 };
//TYPE ASSERTIONS. Declare a variable as unknown and use type assertion to treat it as a string.
var unknownString = 'Some string';
//UTILITY TYPES. Use the Partial utility type to create a version of Person where all properties are optional.
var unknownPerson = {
    id: 4
};
console.log(unknownPerson);
//RECORD TYPE. Create a Record<string, number> that maps employee names to their salaries
var employeeSalaries = {
    "Alex": 15000,
    "Vladimir": 20000,
    'Anna': 25000,
};
//DECORATORS. Create a class decorator that logs when a class is instantiated.
function logInst(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            console.log("New instance of class ".concat(constructor.name, " was created"));
            return _this;
        }
        return class_1;
    }(constructor));
}
var BugReport = function () {
    var _classDecorators = [logInst];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var BugReport = _classThis = /** @class */ (function () {
        function BugReport_1(t) {
            this.type = "report";
            this.title = t;
        }
        return BugReport_1;
    }());
    __setFunctionName(_classThis, "BugReport");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BugReport = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BugReport = _classThis;
}();
//TYPE GUARDS. Write a function that checks if a variable is a string or number using type guards.
function isStrOrNum(value) {
    return typeof value === 'string' || typeof value === 'number';
}
function handle(value) {
    if (isStrOrNum(value)) {
        console.log(value.toString());
    }
    else {
        console.log("Not a string or number");
    }
}
