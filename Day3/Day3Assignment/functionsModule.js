console.log("----------------------- Day 3 Assignent (Functions) ----------------------");
// 1. A function with arrOfObj as a parameter, searchSalary ; return pos of firstElement which has a particular salary -- arr.findIndex
// function f1(arrObj,searchSalary):number
console.log("=====Question 1=====");
let empArr=[{empId:301,empName:"Ansar",salary:30000,deptId:"CSE11"},
        {empId:302,empName:"Aarthi",salary:9000,deptId:"CSE11"},
        {empId:303,empName:"Chithra",salary:12000,deptId:"CSE11"},
        {empId:304,empName:"Sharon",salary:15000,deptId:"CSE11"},
        {empId:305,empName:"Keerthana",salary:14000,deptId:"CSE11"},
        {empId:306,empName:"Ziara",salary:90000,deptId:"CSE11"},
        {empId:307,empName:"Nandhini",salary:7000,deptId:"CSE11"}]
 const salary = 7000;
var result = empArr.findIndex(item => item.salary === salary );
console.log("Position of first element which has the Salary " + salary + " is " + result);


// 2. Add an obj at a particular index position in the arrOfObj
// function addEmp(arrObj,emp,position)=> boolean

console.log("=====Question 2=====");
function insertObject(arr, obj) {
        let index = arr.length;
        console.log("Array length " + index);
        arr.splice(index,0,obj);
        console.log("Final ArrayObject ---", arr , "and the Array length is ", arr.length);
}

let nameArray = [{Name: "Anu", Age: 10},
        {Name: "Binta", Age: 15},
        {Name: "Charu", Age: 7},
        {Name: "Delma", Age: 9}]

let insertObj = {Name: "Elizabeth", Age: 23};
console.log("Original ArrayObject ---", nameArray);
insertObject(nameArray, insertObj);

// 3. Remove an obj from the arrOfObj
// function removeEmp(arrObj,emp)=> boolean

console.log("=====Question 3=====");
let arr3 =  empArr;
console.log("Final Value", arr3);
//find position - using findIndex
removeSalary = 9000;
var  removeEmployee= arr3.findIndex(item => item.salary === removeSalary );
function removeEmp(arr, empVal) {
        arr.splice(empVal,1);
        console.log("Updated Array is" , arr);
}
removeEmp(arr3,removeEmployee);


// 4. Get a particule emp details from arrObj
// function getEmpDetails(arrObj,empId)=> Obj
console.log("=====Question 4=====");
function getEmpDetails(arr4, empId){
        var res = arr4.find(val => val.empId == empId); //find method
        console.log("The Employee details for the EmpId ", empId, " is " , res);
}
let arr4 = empArr;
getEmpDetails(arr4, 304);

console.log("--------------------------------------------------");
