let a = 1;
let b = 2;

//Hint: ++ -> + 1 unit
let c = ++a + b++;
/*
prefix > right operand > assignment(right operand to left operand) > postfix
    prefix -> ++a = 1 + 1 = 2
    right operand -> a + b = 2 + 2 = 4
    assignment -> 4 = c
    postfix -> b = 3
 */

console.log(`a = ${a}, b = ${b}, c = ${c}`);

/*
a = 2
c = 4
b = 3
 */