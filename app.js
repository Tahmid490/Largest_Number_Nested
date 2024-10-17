var n1 = prompt("Enter First number");
var n2 = prompt("Enter Second number");
var n3 = prompt("Enter Third number");

n1 = parseInt(n1); 
n2 = parseInt(n2); 
n3 = parseInt(n3); 

if (n1 >= n2) {
  if (n1 >= n3) {
    document.write(`n1: ${n1} is the largest`);
  } else {
    document.write(`n3: ${n3} is the largest`);
  }
} else {
  if (n2 >= n3) {
    document.write(`n2: ${n2} is the largest`);
  } else {
    document.write(`n3: ${n3} is the largest`);
  }
}
