// # Exercise 10

// * Explain the difference between the double and the triple equals operator.

const firstYearCompleted = true;
const yearsCompleted = 1;

/*
1- Execute the Implicit type coercion before comparing, since there is the "==" operator which 
   triggers the Numeric conversion, so the "firstYearCompleted" variable will be casted to a number type which will be the "1" integer value.

2- The triple equals operator compares the values without doing the Implicit type coercion.
*/

yearsCompleted == firstYearCompleted; // 1
yearsCompleted === firstYearCompleted; // 2
