const readline = require("readline-sync"); //to get input from the user (to be installed)
console.log("----------------------- Day 2 Assignent ----------------------");

//1. Create a function which returns the squares of all the elements without using the map method
//[100,400,900,1600,2500]

console.log("Sauare of given numbers are: ");
let numArr = [10,20,30,40,50];
let sqrArr = [];
function sqrFunc() {
    for(var i = 0; i<=numArr[i]; i++) {
        ans = (numArr[i]*numArr[i]);
        sqrArr.push(ans);
    }
    console.log(sqrArr);
}
sqrFunc();
console.log("-----------------------------------------------------------------");

//2. Create a function which takes in a string which holds a phoneNumber and returns the masked version
//var res=createMaskOnPhoneNumber(1234567890); 
//123****890

//var str = document.getElementById("phoneNumber");
//console.log("Please enter your number" + str.value);
//<input type="text" id="phoneNumber" />
//const number = prompt("Enter your Phone Number: ");

console.log("Masked version of  the given phone number is: ");
console.log("Please enter your Phone Number");
let phoneNumber = readline.question();
let isNumber = "^\\d{10}$";
if(phoneNumber) {
  console.log(phoneNumber);
} else {
  console.log("Please enter a valid number - 10 Digits Number only and No Space allowed.");
}
// res=createMaskOnPhoneNumber(1234567890);
console.log("-----------------------------------------------------------------");


//3. Create a function which takes in array of objects and returns the obj which has the highest salaryvar empArr=[{empId:101,empName:"Asha",salary:1001,deptId:"D1"},{empId:102,empName:"Gaurav",salary:2000,deptId:"D1"},{empId:103,empName:"Karan",salary:2000,deptId:"D2"},{empId:104,empName:"Kishan",salary:3000,deptId:"D1"},{empId:105,empName:"Keshav",salary:3500,deptId:"D2"},{empId:106,empName:"Pran",salary:4000,deptId:"D3"},{empId:107,empName:"Saurav",salary:3800,deptId:"D3"}]var obj=getHighestSalaryEmp(empArr);
//{empId:106,empName:"Pran",salary:4000,deptId:"D3"}

console.log("Highest Salary Employee details from the given array is: ");
empArr = [{empId:301,empName:"Ansar",salary:33000,deptId:"CSE11"},
          {empId:302,empName:"Aarthi",salary:25000,deptId:"CSE11"},
          {empId:303,empName:"Chithra",salary:42000,deptId:"CSE11"},
          {empId:304,empName:"Sharon",salary:52000,deptId:"CSE11"},
          {empId:305,empName:"Keerthana",salary:50000,deptId:"CSE11"},
          {empId:306,empName:"Ziara",salary:39000,deptId:"CSE11"},
          {empId:307,empName:"Nandhini",salary:37000,deptId:"CSE11"}]

function getHighestSalaryEmp(empArr) {
    let maxSalary = 0;
    let maxKey = {}
    for( const key of Object.entries(empArr)) {
      if (maxSalary < key[1]['salary']) {        
        maxSalary =  key[1]['salary'];
        maxKey = key[1]
      }
    }
   return (maxKey) 
}
 var obj = getHighestSalaryEmp(empArr);
 console.log(obj);
 
console.log("-----------------------------------------------------------------");