//Properties

//Associative 
add(add(x,y), a) == add(x, add(y,z));

//Commutative
add(x,y) == add(y,x);

//Identity
add(x,0) == x;

//Distributive
add(multiply(x,y), multiply(x,z)) == multiply(x, add(y+z));