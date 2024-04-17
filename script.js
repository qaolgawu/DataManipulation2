// function csv(str){
//     const arr = str.split("\n")
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }
// csv('Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232')

function csv2(str){
    const arr = str.split("\n")
    const newArr= arr.map(item => item.split(','))
    return newArr
}
const arr = csv2('ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26')
console.log(arr);

function csv3(arr){
    return arr.slice(1).map((arr, index) => {
        return {id : arr[0], name : arr[1], occupation : arr[2], age : arr[3]}
    }) 
}
const arrObj = csv3(arr)
console.log(arrObj);

function csv4(arr){
    arr.pop()
    arr.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
    arr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
    return arr
}

const arrSorted = csv4(arrObj)
console.log(arrSorted);

function csv5(arr) {
    return arr.map(item => Object.values(item).join(','))
        .join('\n')
}

const str = csv5(arrSorted)
console.log(str);

