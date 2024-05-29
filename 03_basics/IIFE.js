// IIFE ---> Immediatly Invoked Function Expression.

// this used to create a local scope for variables to prevent them from polluting the global scope..
// global polluting means using same name for different variables..

// it contain two parts on where we write the function in lexical scope. other part is used to invoke the function..

//example
(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();
// we strictly need these semicolons to stop the execution of first function.

((name)=>(console.log(`DB is connected ${name}`)))('Praveen');
// this how we can pass an arguement in the IIFE..