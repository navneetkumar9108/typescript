let response: any = "42";
let numericlength: number = (response as string).length;

// console.log(numericlength);

type Book = {
    name: string;
}

let bookString = '{"name":"The Great Gatsby"}';
let bookObject = JSON.parse(bookString) as Book ;

console.log(bookObject);

let inputElement = document.getElementById('username') as HTMLInputElement;

let value: any;

value = 'chai';
value = [1,2,3];
value = 2.5;
value.toUpperCase(); // This will throw an error at runtime since value is a number now

let newValue: unknown;

newValue = 'chai';
newValue = [1,2,3];
newValue = 2.5;
// newValue.toUpperCase(); // This will throw an error at compile time since newValue is of type unknown

if(typeof newValue === 'string'){
    newValue.toUpperCase(); // This is safe because we checked the type
}

try {
    
} catch (error) {
 if (error instanceof Error) {
    console.log(error.message);
 }
 console.log("Error",error);   
}

const data: unknown = "Hello, World!";
const strData: string = data as string; // Type assertion

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }
    role;
}


function neverReturn(): never {
    while (true) {}
}