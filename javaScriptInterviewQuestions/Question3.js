//very important question

const a  = {};
const b = { key :"b"};
const c = { key : "c"};

a[b] =124;
a[c] = 456;

//when

console.log(a)

/* a[b] = 124;
JavaScript implicitly converts the object key (b) into a string using b.toString().
Since b is an object, it converts to:
javascript
Copy code
"[object Object]" */