
let users: string[]

    users = [ 'lux', 'lax', 'Van' ]


let otherUSers: Array<string> | Array<number>

    // otherUSers = [ 'lux', 'lax', 'Van', 0, 2 ]
    // otherUSers = [ 0, 2 ]


let otherTwoUsers = [ 'lux', 'lax', 'Van' ]

console.log(
  'user', users[ 0 ]
);
console.log(
  otherTwoUsers.length
);
otherTwoUsers.push('AThisIsATest')
otherTwoUsers.sort()
console.log(
  otherTwoUsers
);


