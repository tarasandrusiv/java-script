

const a = parseFloat(prompt('Enter coef a'));
const b = parseFloat(prompt('Enter coef b'));
const c = parseFloat(prompt('Enter coef c'));

function quadr(a,b,c) {
 const result =  a*a - b - c;
 return result;
}

const result = quadr(1,2,3);
alert(result);

if (result >= 1){
    alert('false');
}