/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
    arr.map(function(element){
    if(element.profession === "developer")
    {
      console.log(element.profession);
    }
    
}
}

function PrintDeveloperbyForEach() {
  arr.forEach(function(element){
    if(element.profession === "developer")
    {
      console.log(element.profession);
    }
  }
}

function addData() {
  const newObj = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newObj);
  console.log(arr);
    
}

function removeAdmin() {
  Const newArray = arr.filter((element)=> element.profession !== "admin");
  console.log(newArray);
}

function concatenateArray() {
  const arr1 =[{id:5,name:"Akshay",age:"21",profession:"developer"}, 
               {id:6,name:"Ajay",age:"25",profession:"intern"}, 
               {id:7,name:"Arjun",age:"28",profession:"software enginner"}]
  const newArray = arr.concat(arr1);
  console.log(newArray);
}
