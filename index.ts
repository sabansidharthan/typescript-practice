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
