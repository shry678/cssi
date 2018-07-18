// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let customer_name;
let balance;

function testMe(a) {
  return a + 4;
  console.log(testMe(a));
}



function openAccount(name){
  balance = 0;
  // Set the value for customer_name equal to name below
  customer_name=name;
  balance =0;
  return `${name} has opened a new account with a balance of $0`;

}

function deposit(value){
  // update the value of balance
  //return the correct statement
  balance += value;
  return `${customer_name} has deposited ${value}. ${customer_name}\'s total balance is \$${balance}`;
}

function withdraw(withdrawInput){
  //update the value of balance
  //return the correct statement
  if (withdrawInput > balance) {
    return `Sorry, ${customer_name}, you do not have enough money in your account. You need ${withdrawInput-balance} more dollars`;
  }
  balance-= withdrawInput;
  return `${customer_name} has withdrawn ${withdrawInput}. ${customer_name} has \$${balance} remaining. `;

}

// Write your script below
