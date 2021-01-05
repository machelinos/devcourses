/*
SCOPE
1.- A function has access to it's own local scope variables
2.- In puts to a function are treated as local scope variables
3.- Blocks scope can be created with let
4.- A function has access to the variables contained within the same cope that function was created in
5.- A function's local scope variables are not available outside that function
6.- A function's local scope variables are not available outside that function,regardless of the context it's called in
7.- If an inner and aouter variable share the same name, an the name is referenced in the inner scope, the inner scope variable masks the variable from the outer scope with the same name. This renders the outer scope variables inaccesible from anywhere within the inner function block.
8.- If an inner and an outer variable share the same name, and the name is referenced in the outer scope, the outer value binding will be used
9.- A new variable scope is created for every call to a function, as exemplified with a counter.
10.- A new variable scope is created for each call to a function, as exemplified wuth uninitialized string variables
11.- An inner function can access both it's local scope variables and variables in it's containing scope, provided the variables have different names
12.- Between calls to an inner function, that inner function retains access to a variable in an outer scope. Modifying those variables has a lasting effect between calls to the inner function
13.- The rule about retaining access to variables from an outer scope still applies, even after the outer function call (that created the outer scope) has returned
*/