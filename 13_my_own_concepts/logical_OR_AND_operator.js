
//  && -> check first falsy value if not found then continue execution to the last operand. If left operand gives falsy value then && operator don't execute right operands.
function funcOne(){
    console.log("first value");
    return true // first operand prints value and return true means && operator can't find any falsy vlaue from first operand so it will go for second operand execution.
}
function funcTwo(){
    console.log("second value");
    return false // in second operand && get falsy value so it will stop the execution though the 3rd operand also gives falsy value..it will not go to the 3rd execution anymore.
}
function funcThree(){
    console.log("third value");
    return false // no matter what returns.
}

funcOne() && funcTwo() && funcThree()



//  || -> check first truthy value if not found then continue execution to the last operand. If left operand gives truthy value then || operator don't execute right operands.
function one(){
    console.log("1st value");
    return false // first operand prints value and return false means || operator can't find any truthy vlaue from first operand so it will go for second operand execution.
}
function two(){
    console.log("2nd value");
    return true // in second operand || get truthy value so it will stop the execution though the 3rd operand also gives truthy value..it will not go to the 3rd execution anymore.
}
function three(){
    console.log("3rd value");
    return true // no matter what returns.
}

one() || two() || three()