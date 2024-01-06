/* Immediately Invoked Funtion Expressions */

//wrappd the function with parenthisis and call it immediately
(function addNumber(){
    console.log(10 + 20);
})(); // semicolon is must while writing IIFE


// IIFE with parametes and arguments
(function subNumber(num1, num2){
    console.log(num1 - num2);
})(30, 20);