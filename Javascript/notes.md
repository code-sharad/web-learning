

## Difference Types to write functions 

```
const pow = (a,b) => (
    a**b
);

const pow = (a,b) => a**b;

const pow = (a,b) => {
    return a**b;
}
```
```
Below code will not return even or odd because of {}

const isEven = (a) => {
     a % 2 == 0 ? "even" : "odd"
 };


Below code will return even or odd because of ()
const isEven = (a) => (
     a % 2 == 0 ? "even" : "odd"
);
```

## Difference between arrow funcation and Normal function

```
const student = {
    name: "sharad",
    marks: 89,
    age:20,
    getName: function(){
        return this.name; // this is in global scope
    }
    getAge: () => {
        return name; // arrow function can access parent variables, functions without using this keyword
                    // parent's scope
    }
}

```