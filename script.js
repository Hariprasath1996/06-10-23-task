

// Write a program that takes an array of elements and counts the occurrences of each
// element using a Map.
// Sample Input: const arr = [1, 2, 3, 2, 1, 4, 5, 4];


//  copied from website after i cleared 
const arr = [1, 2, 3, 2, 1, 4, 5, 4];

function countOccurrences(arr) {
  const elementCountMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (elementCountMap.has(element)) {
      elementCountMap.set(element, elementCountMap.get(element) + 1);
    } else {
      elementCountMap.set(element, 1);
    }
  }

  return elementCountMap;
}
const result = countOccurrences(arr);
result.forEach((count, element) => {
  console.log(`${element}: ${count} times`);
});

// Write a program that takes an array of strings and groups anagrams together using a
// Map.
// Sample Input: const arr = [&quot;eat&quot;, &quot;tea&quot;, &quot;tan&quot;, &quot;ate&quot;, &quot;nat&quot;, &quot;bat&quot;];
// const chunkSize = 3;


// code copied from website after i cleared

const arr1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const chunkSize = 3;

function groupAnagrams(arr1, chunkSize) {
  const anagramMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const word = arr1[i];
    const sortedWord = word.split("").sort().join("");
    if (anagramMap.has(sortedWord)) {
      anagramMap.get(sortedWord).push(word);
    } else {
      anagramMap.set(sortedWord, [word]);
    }
  }
  const groupedAnagrams = Array.from(anagramMap.values()).filter(
    (group) => group.length >= chunkSize
  );
  return groupedAnagrams;
}
const result1 = groupAnagrams(arr1, chunkSize);
result1.forEach((group) => {
  console.log(group);
});


// // Write a program that takes an array of strings and reverses each string in the array
// using the array methods.
// Sample Input: const arr = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;];

const arr2= ["apple", "banana", "orange"];

function reverseStrings(arr2) {
  // Use the map method to create a new array with reversed strings
  const reversedArr = arr2.map((str) => {
    return str.split('').reverse().join('');
  });

  return reversedArr;
}

const reversedArray = reverseStrings(arr2);

console.log(reversedArray);


// Write a program that takes two objects and merges them into a single object
// Sample Input: const obj1 = { name: &quot;John&quot;, age: 30 };
// const obj2 = { city: &quot;New York&quot;, occupation: &quot;Engineer&quot; };
// Sample Output: {
// name: &quot;John&quot;,
// age: 30,
// city: &quot;New York&quot;,
// occupation: &quot;Engineer&quot;

const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", occupation: "Engineer" };

function mergeObjects(obj1, obj2) {
  // Use the spread operator to merge the objects
  const mergedObject = { ...obj1, ...obj2 };
  return mergedObject;
}
const mergedResult = mergeObjects(obj1, obj2);
console.log(mergedResult);


// Write a program that takes an array of objects and converts it into a single object
// using Object.assign() and Object.entries().
// Sample Input: const arr = [
// { key: &quot;name&quot;, value: &quot;John&quot; },
// { key: &quot;age&quot;, value: 30 },
// { key: &quot;city&quot;, value: &quot;New York&quot; }
// ];

const arr4 = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" }
];

function arrayToObject(arr4) {
  const resultObject = {};

  for (let i = 0; i < arr4.length; i++) {
    const item = arr[i];
    resultObject[item.key] = item.value;
  }

  return resultObject;
}

const mergedObject = arrayToObject(arr);

console.log(mergedObject);

// Write a program that takes an object and counts the occurrences of each property
// Sample Input: const obj = { name: &quot;John&quot;, age: 30, city: &quot;New York&quot;, profession: &quot;Engineer&quot; };


// code copied from website after i cleared 

const obj = {
  name: "John",
  age: 30,
  city: "New York",
  profession: "Engineer"
};
function countPropertyOccurrences(obj) {
  const propertyCounts = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (propertyCounts[value]) {
        propertyCounts[value] += 1;
      } else {
        propertyCounts[value] = 1;
      }
    }
  }
  return propertyCounts;
}
const result3 = countPropertyOccurrences(obj);
console.log(result3);
