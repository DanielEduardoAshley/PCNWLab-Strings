/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/
const makeEven = str =>{
if(str.length%2 !== 0){
   return `${str}#` 
   }

   return str
}
console.log(makeEven("bob"))
/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/
const getLastChar = str =>{
    if(str.length < 3){ return "not enough characters!"}
    return str.charAt(str.length-1)


}
console.log(getLastChar("ss"))
/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/
const get3rdChar = str =>{
   return str.charAt(2)

}
console.log(get3rdChar("rider"))
/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/
const get3rdCharFromEnd = str =>{
return str.charAt(str.length-3)

}

console.log(get3rdCharFromEnd("hello"))
/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/
const vowel= ()=>{

}

const startsWithVowel = str =>{
    const wVowel = str.charAt(0)
    console.log(wVowel)

    if("aeiouAEIOU".indexOf(wVowel) === 0){
        return true
    }
    console.log("aeiouAEIOU".indexOf(wVowel))
        return false


}
console.log(startsWithVowel("Dfdfjdfnd"))
/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/

const endsWithVowel =str =>{
    const lastChar = str[str.length-1];
    if ("aeiou".indexOf(lastChar) !== -1) {
    // if (lastChar === "i" || lastChar === "e" || lastChar === "o" ||lastChar==="u"||lastChar==="a"  ){
        return true
     }
        return false
 
 
 }

 console.log(endsWithVowel("bbbb"))
/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/
const hasVowels =(str)=>{
    if("aeiou".indexOf(str) === 1){
        return true
    }
        return false
    /*if(str.indexOf("a") || str.indexOf("a")|| str.indexOf("a")){*/

    



}
console.log(hasVowels("sdfdfuu"))
/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/
const hasUpperCase = str =>{
//     const upperCase = str.toUpperCase()
//     console.log(str.indexOf(upperCase.charAt(0)))
//    if(str.indexOf(upperCase.charAt(0)) >= 0){
//     return true
// }
//     return false

if(str === str.toLowerCase()){
    return false;
}
    return true;

}
console.log('HAS ', hasUpperCase("ttttt"))
/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/

const isPalindromic = str =>{
// const firstStepSplit = str.split().reverse().join()
// console.log('hiii', firstStepSplit)
// if(firstStepSplit === str ){
//     console.log("no")

//     return true
// }
// console.log("nooo")

//     return false
let isPal = str.split("").reverse().join("");
    if (isPal === str){
        return true;
    }
        return false;
}

console.log('hiiiiii', isPalindromic("racecar"))

/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/
const getInitials = str =>{
    const lastInitial = str.charAt(str.lastIndexOf(" ") + 1)
    const firstInitial = str.charAt(0)
    return firstInitial + lastInitial



}
console.log(getInitials("daniel ashley"))


/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/
const isPerfectStr= (str)=>{

const middle = str.substr(Math.ceil(str.length/2)-2 , 3)
const lastChar = middle.charAt(middle.length-1);
const firstChar = middle.charAt(0);
let isPal = middle.split("").reverse().join("");
console.log(middle)
console.log(lastChar)
console.log(firstChar)
console.log(isPal)
    if ("aeiou".indexOf(lastChar) !== -1 && "aeiou".indexOf(firstChar) !== -1 && isPal === middle){

        return true
     }
        return false
 
    

}
console.log(isPerfectStr("ab"))
/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

const  strMasher= (str1, str2)=>{
    console.log(str1.slice(0, str1.length/2, str2 ) )

const newString = str1.slice(0, str1.length/2 ) + str2 + str1.slice(str1.length/2)

return newString
}
console.log(strMasher("1234", "xzccme"))