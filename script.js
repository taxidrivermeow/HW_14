const palindromeInput = document.getElementById('palindrome_input');
const palindromeResSpan = document.getElementById('palindrome_res');
const reverseInput = document.getElementById('reverse_input');
const reverseResultSpan = document.getElementById('reverse_result');
const stringValueInput = document.getElementById('string_value');
const characterValueInput = document.getElementById('character_value');
const resCalcSpan = document.getElementById('res_calc');

function checkPalindrome(){
    // get value from input to str and then call isPalindrome(str)
    palindromeResSpan.innerHTML = `<b>${isPalindrome(palindromeInput.value)}</b>`;
}

function isPalindrome(str){
    str = str.toLowerCase();
    const checkStr = reverser(str);
    return (str === checkStr);
}

function reverseString(){
    // get value from input to str and then call reverseString(str)
    reverseResultSpan.innerHTML = `<b>${reverser(reverseInput.value)}</b>`;
}

function reverser(str){
    return str.split('').reverse().join('');
}

function getCount(){
    // get value from input to str and c and then call countChar(str,c)
    resCalcSpan.innerHTML = countChar(stringValueInput.value, characterValueInput.value);
}

function countChar(str,c){
    return (str === '' || c === '') ? 0 : str.split(c).length - 1;
}
