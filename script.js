// task 1 :

// How to compare two json have the same properties without order?
//  let obj1 = {name:"person1",age:5};
//  let obj2 = {age:5,name:"person1"};

let obj1 = { name: "person", age: 5 };
let obj2 = { age: 5, name: "person1" };

let str1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let str2 = JSON.stringify(obj2, Object.keys(obj2).sort());

if (str1 === str2) {
  console.log("The JSON objects are equal");
} else {
  console.log("the JSON objects are not equal");
}

// task 2

// use the rest countries API URL https://restcountries.com/v3.1/all and display
// all the country flag in the console

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  // console.log(data);
  var result = JSON.parse(data);
  // console.log(result);

  for (var i = 0; i < result.length; i = i + 1) {
    console.log(result[i].flags.png);
  }
};

// task 3

// use the same rest countries and print all the countries name , regions,sub region and populations

var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data1 = request1.response;
  // console.log(data1);
  var result1 = JSON.parse(data1);
  // console.log(result1);

  for (var i = 0; i < result1.length; i = i + 1) {
    console.log(
      "countries name :" + " " + result1[i].name.common,
      "region name :" + " " + result1[i].region
    );
    console.log(
      "sub region name :" + " " + result1[i].subregion,
      "populations" + " " + result1[i].population
    );
  }
};
