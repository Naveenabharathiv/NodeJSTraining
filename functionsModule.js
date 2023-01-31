// 1. A function with arrOfObj as a parameter, searchSalary ; return pos of firstElement which has a particular salary -- arr.findIndex
// function f1(arrObj,searchSalary):number
console.log("=====Question 1=====");
let empArr=[{empId:301,empName:"Ansar",salary:30000,deptId:"CSE11"},
        {empId:302,empName:"Aarthi",salary:7000,deptId:"CSE11"},
        {empId:303,empName:"Chithra",salary:12000,deptId:"CSE11"},
        {empId:304,empName:"Sharon",salary:15000,deptId:"CSE11"},
        {empId:305,empName:"Keerthana",salary:14000,deptId:"CSE11"},
        {empId:306,empName:"Ziara",salary:90000,deptId:"CSE11"},
        {empId:307,empName:"Nandhini",salary:7000,deptId:"CSE11"}]
 const salary = '7000'
function searchSalary(empDetails, salary) {
        console.log("empDetails", empDetails);
        return [empDetails.salary === salary];
}
console.log("empARR!!!!!!", empArr);
var result = empArr.findIndex(searchSalary);
console.log("Position of first element which has the Salary " + salary + " is " + result);


// 2. Add an obj at a particular index position in the arrOfObj
// function addEmp(arrObj,emp,position)=> boolean

console.log("=====Question 2=====");
function insertObject(arr, obj) {
        let index = arr.length;
        console.log("Array length " + index);
        arr.splice(index,0,obj);
        console.log("Final ArrayObject ---" + arr.toString());
}

let nameArray = [{Name: "Anu", Age: 10},
        {Name: "Binta", Age: 15},
        {Name: "Charu", Age: 7},
        {Name: "Delma", Age: 9}]

        let insertObj = {Name: "Elisa", Age: 12};
console.log("Original ArrayObject ---" + nameArray,toString());
insertObject(nameArray, insertObj);

// 3. Remove an obj from the arrOfObj
// function removeEmp(arrObj,emp)=> boolean

console.log("=====Question 3=====");
//let arr =  empArr;
console.log("Final Value" + empArr);


// 4. Get a particule emp details from arrObj
// function getEmpDetails(arrObj,empId)=> Obj
console.log("=====Question 4=====");
function getEmpDetails(empArr, empId){
        console.log(empArr, empId);
}