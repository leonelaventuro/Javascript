let a = 1;
const sumar = () => {
    a += 2;
};
console.log(a);
suma();
console.log(a);



const a = () => console.log("A");

function b() {
    console.log("B");
}
const c = function() {
    cconsole.log("C")
};

a();
b();
c();