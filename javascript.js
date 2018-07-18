console.log("Hello World!!");

const name = 'Charlie';
// console.log('Hello' + ' ' + name + '!');
console.log(`Hello ${name}!`);

const age = 16;
// console.log('You are ' + age +  ' years old' + '!');
console.log(`You are ${age} years old!`);

if(age>=18) {
  console.log('You can get your driver\'s license and vote');
}
else if(age<15) {
  console.log('You can not get your driver\s license');
}

else {
  console.log('You can get your permit but you can not vote');
}

//line comment

/* multiple lines
zscjsbd
*/

/** documentation

*/

function greet(name1, name2=null) {
  //code
  if (name2== null) {
    console.log(`Hello ${name}.`);
  }

  else {
    console.log(`Hello ${name1} and ${name2}`);
  }
}

greet('Alice', 'John');


function makeGreetingMessage(name1, name2=null) {
  if (name2==null) {
  return `Hello ${name1}`;
  }

  else {
  return `Hello ${name1} and ${name2}`
  }
}

function greet(name1, name2=null) {
  if (name1[0] !== 'A') {
    return;
  }
  console.log(makeGreetingMessage(name1, name2));
}

const multiplyBy3 = (x) => x * 3; //short way of writing execute, then return
console.log(multiplyBy3);

let n=0;
// setInterval(() =>{
//   n+=1;
//   console.log(n);
// }, 1000);


const multiplyBy4 = function multiplyBy4(x) {
  return x*3;
}

document.addEventListener('DOMContentLoaded', () => {
  const likeButton = document.querySelector('.likeButton');
  likeButton.addEventListener('click', () => {
    const greetingMessage = makeGreetingMessage('Alice');
    likeButton.innerText = greetingMessage;
    likeButton.style.backgroundColor='blue';
  });
});

const names = ['alice', 'bill', 'sarah', 'cassidy'];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

for (let i =0; i < names.length; i++) {
  console.log(names[i]);
}

let count =0;
while (count<5) {
  count++;
  console.log(count);
}

names.forEach((name) => {
  console.log(`forEach: ${name}`)
})
