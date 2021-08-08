// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let map = new Map();
map.set('name', 'helloo');
console.log('');
console.log(map.get('name'));

let myMap = new Map([['fname', 'chandler'], ['lname', 'bing']]);

for (let entry of myMap.entries()) {
  console.log(`${entry[0]} -> ${entry[1]}`);
}

for (let key of myMap.keys()) {
  console.log(key);
}

for (let value of myMap.values()) {
  console.log(value);
}

//for forEach
console.log('<-----for each------->');
myMap.forEach(mapFun);
function mapFun(value, key, callingMap) {
  console.log(key + ' ' + value);
  console.log(myMap === callingMap);
}

console.log('<-----for each------->');
let mySet = new Set([1, 2, 3, 4]);

mySet.forEach(setFun);
function setFun(value, key, callingSet) {
  console.log(key + ' ' + value);
  console.log(mySet === callingSet);
  // console.log(callingSet[key]);
}

console.log('<---- symbols------->');

let s = Symbol('description');
console.log(typeof s);
console.log(s.toString());

let s1 = Symbol('test');
let s2 = Symbol('test');
console.log(s1 === s2);

let s3 = Symbol.for('regSymbol');
let s4 = Symbol.for('regSymbol');
console.log(s3 === s4);

console.log(Symbol.keyFor(s3));

let fname = Symbol();
let person = {
  [fname]: 'chandler'
};

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));

// for..of --> iterator method--> symbol.IteratorReturnResult

let str = 'hello';
let arr = [1, 2, 3];
let num = 5;
let obj = { name: 'chandler' };

console.log(typeof str[Symbol.iterator]);
console.log(typeof arr[Symbol.iterator]);
console.log(typeof num[Symbol.iterator]);
console.log(typeof obj[Symbol.iterator]);

console.log('<---- iterable and iterator------->');

let iterable = [1, 2, 3];
function createIterator(array) {
  let count = 0;
  return {
    next: function() {
      return count < array.length
        ? { value: array[count++], done: false }
        : { value: undefined, done: true };
    }
  };
}

let myIterator = createIterator(iterable);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

///iterating object

let personal = {
  fname: 'chandler',
  lname: 'bing'
};

personal[Symbol.iterator] = function() {
  let properties = Object.keys(personal);
  let count = 0;
  let isDone = false;
  let next = () => {
    if (count >= properties.length) {
      isDone = true;
    }
    return { done: isDone, value: this[properties[count++]] };
  };
  return { next };
};

for (let p of personal) {
  console.log(p);
}

//generator

function* createGenerator() {
  yield 1;
  console.log('aftr yield 1');
  yield 2;
}

let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
//obj iterator using generator

personal[Symbol.iterator] = function*() {
  let properties = Object.keys(personal);
  for (let t of properties) {
    yield this[t];
  }
};

for (let p of personal) {
  console.log(p);
}
