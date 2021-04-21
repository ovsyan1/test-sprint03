


String.prototype = removeDuplicates()


let str = "Giant Spiders?   What's next? Giant Snakes?"

console.log(str)
let arr = str.split(' ');
let newStr = [...new Set(arr)]
console.log(newStr.join(' '))
 str =  ". . . . ? . . . . . . . . . . . ";
console.log(str)
//  arr = str.split(' ');
//  newStr = [...new Set(arr)]
str = str.removeDuplicates()
console.log(str)

function removeDuplicates(){
    let arr = str.split(' ');
    let newStr = [...new Set(arr)]
    return newStr.join(' ')
}